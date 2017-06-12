import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import pages from './pages';
import { getReducers, doInitSetup } from './helpers';

const appState = window['__APP_INITIAL_STATE__'];
const { initialState, actionType } = appState;
const { App } = pages[appState.templateName];

let store = createStore(getReducers(pages), {}, applyMiddleware(thunk));
let butter = doInitSetup({initialState, actionType, store});
render(
  <Provider store={store}>
    <App {...butter} />
  </Provider>
  , document.getElementById('root'));
