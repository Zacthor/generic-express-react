import express from 'express';
import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';
import template from './template';
import pages from './pages';
import {getReducers} from './helpers';


const server = express();
server.use('/public', express.static('public'));

const finisher = (data, res, App) => {
  const {templateName, initialState, title, actionType} = data;

  let store = createStore(getReducers(pages), {}, applyMiddleware(thunk));
  if (actionType) {
    store.dispatch({ type: actionType, payload: initialState });
  }
  const body = renderToString(
    <Provider store={store}>
      {/*TODO: move initialState out when not needed.*/}
      <App />
    </Provider>
  );
  // TODO: Immutable maybe?
  res.send(template(Object.assign({}, data, {body})));
};

Object.keys(pages).forEach((pageKey) => {
  const { router, App } = pages[pageKey];
  server.get(router.path, (req, res) => {
    router.loader(req, (data) => finisher(data, res, App));
  });
});

server.listen(8080);
console.log('listening');
