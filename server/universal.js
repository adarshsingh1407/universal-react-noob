const path = require('path')
const fs = require('fs')
const React = require('react')
const {Provider} = require('react-redux')
const {renderToString} = require('react-dom/server')
const {StaticRouter} = require('react-router-dom')
const {createLogger} = require('redux-logger')
const thunk = require('redux-thunk').default
const { createStore, applyMiddleware } = require('redux')
const {default: App} = require('../src/App')
const appReducers = require('../src/reducers').default;
const { fetchProfile } = require('../src/actions/ProfileActions');
import { setSSR } from '../src/actions/SSRActions';
import serialize from 'serialize-javascript';
const APP_TITLE = 'Dauble | Collector';

module.exports = function universalLoader(req, res) {
  const filePath = path.resolve(__dirname, '..', 'build', 'index.html')

  fs.readFile(filePath, 'utf8', (err, htmlData)=>{
    if (err) {
      console.error('read err', err)
      return res.status(404).end()
    }
    const context = {}
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
      console.log(preloadedState);

      if (preloadedState.ssr.isDone) {
        //SSR Done!!
        unsubscribe();
        preloadedState = serialize(preloadedState, {isJSON: true});
        console.log(preloadedState);

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
          console.log({msg:'req.path', data:req.path});
          console.log({msg:'req.query', data:req.query});
          // we're good, send the response
          const RenderedApp = htmlData
            .replace('{{SSR}}', markup)
            .replace('<title>DCW</title>', SSR_TITLE)
            .replace('{{__SERVER_DATA__}}', preloadedState);
          res.send(RenderedApp)
        }
      } else if (!preloadedState.profile.isBusy) {
        console.log('profile fetched');
        console.log(preloadedState);
        // Trigger SSR only after profile has been fetched
        store.dispatch(setSSR('CollectorProfile', true));
      }
    })

    store.dispatch(fetchProfile(39));

  })
}
