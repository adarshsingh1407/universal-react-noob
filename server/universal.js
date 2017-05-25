import path from 'path';
import fs from 'fs';
import React from 'react';
import {Provider} from 'react-redux';
import {renderToString} from 'react-dom/server';
import {StaticRouter} from 'react-router-dom';
import {createLogger} from 'redux-logger';
import { default as thunk } from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import {default as App} from '../src/App';
import {default as appReducers} from '../src/reducers';
import { fetchProfile } from '../src/actions/ProfileActions';
import { setSSR } from '../src/actions/SSRActions';
import serialize from 'serialize-javascript';
import Cookies from 'universal-cookie';

const APP_TITLE = 'Dauble | Collector';

module.exports = function universalLoader(req, res) {
  const filePath = path.resolve(__dirname, '..', 'build', 'index.html')

  fs.readFile(filePath, 'utf8', (err, htmlData)=>{
    if (err) {
      console.error('read err', err)
      return res.status(404).end()
    }
    const context = {
      onServer: true
    }
    // const cookies = new Cookies(req.headers.cookie);
    // console.log(cookies.get('myCat'));
    const loggerMiddleware = createLogger()
    const store = createStore(
      appReducers,
      applyMiddleware(
        thunk
        // , loggerMiddleware
      )
    )

    let preloadedState = {};

    let unsubscribe = store.subscribe(() => {

      preloadedState = store.getState();

      if (preloadedState.ssr.isDone) {
        //SSR Done!!
        unsubscribe();
        preloadedState = serialize(preloadedState, {isJSON: true});

        const markup = renderToString(
          <Provider store={store}>
            <StaticRouter
              location={req.url}
              context={context}
            >
              <App />
            </StaticRouter>
          </Provider>
        )

        const SSR_TITLE = renderToString(
          <title>{APP_TITLE}</title>
        )
        if (context.url) {
          // Somewhere a `<Redirect>` was rendered
          redirect(301, context.url)
        } else {
          // console.log({msg:'req.path', data:req.path});
          // console.log({msg:'req.query', data:req.query});
          // we're good, send the response
          const RenderedApp = htmlData
            .replace('{{SSR}}', markup)
            .replace('<title>DCW</title>', SSR_TITLE)
            .replace('{{__SERVER_DATA__}}', preloadedState);
          res.send(RenderedApp)
        }
      } else if (!preloadedState.profile.isBusy) {
        // Trigger SSR only after profile has been fetched
        store.dispatch(setSSR(req.path, true));
      }
    })

    const actorId = parseInt(req.path.replace('/collector/', ''), 10);

    if (!isNaN(actorId) && actorId > 0) {
      store.dispatch(fetchProfile(actorId));
    } else {
      const markup = renderToString(
        <Provider store={store}>
          <StaticRouter
            location={req.url}
            context={context}
          >
            <App />
          </StaticRouter>
        </Provider>
      )

      const SSR_TITLE = renderToString(
        <title>{APP_TITLE}</title>
      )
      const RenderedApp = htmlData
        .replace('{{SSR}}', markup)
        .replace('<title>DCW</title>', SSR_TITLE)
        .replace('{{__SERVER_DATA__}}', preloadedState = serialize({}, {isJSON: true}));
      res.send(RenderedApp)
    }

  })
}
