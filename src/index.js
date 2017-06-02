import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import  { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger'
import {Provider} from 'react-redux';
import appReducers from './reducers';
import { receiveProfile } from './actions/ProfileActions';
import { setSSR } from './actions/SSRActions';
import { BrowserRouter } from 'react-router-dom';
// import Cookies from 'universal-cookie';

const loggerMiddleware = createLogger();

const preloadedState = window.__SERVER_DATA__;
delete window.__SERVER_DATA__;

// const cookies = new Cookies();
//
// cookies.set('myCat', 'Pacman', { path: '/' });
// console.log(cookies.get('myCat')); // Pacman

const middlewares = [thunk, loggerMiddleware];

let store = createStore(
  appReducers,
  applyMiddleware(...middlewares)
);

if (preloadedState && preloadedState.profile) {
  let collector = {
    data: preloadedState.profile.collector
  }

  store.dispatch(receiveProfile(preloadedState.profile.collector.collectorId, collector));
  store.dispatch(setSSR(preloadedState.ssr.path, preloadedState.ssr.isDone));
}

let unsubscribe = store.subscribe(() => {
})

// store.dispatch(addSubstance('Water', 26));
// store.dispatch(fetchProfile(39)).then(() =>
//   console.log(store.getState())
// )
// store.dispatch(changeStep(1, 2));
// store.dispatch(addSubstance('Ethanol', 20, 1));
// store.dispatch(incTemp(0, 4));//30
// store.dispatch(decTemp(1));//19
// store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_SOLID));

unsubscribe();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
