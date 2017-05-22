import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import  { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger'
import {Provider} from 'react-redux';
import appReducers from './reducers';
// import { addSubstance } from './actions/SubstanceActions';
// import { fetchProfile } from './actions/ProfileActions';
import { BrowserRouter } from 'react-router-dom'

const loggerMiddleware = createLogger();

let store = createStore(
  appReducers,
  applyMiddleware(
    thunk,
    loggerMiddleware)
);

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
