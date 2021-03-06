import express from 'express';
import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';
import template from './template';
import pages from './pages';
import { getReducers, doInitSetup } from './helpers';

const server = express();
server.use('/public', express.static('public'));

const finisher = (data, res, App) => {
  const {initialState, actionType} = data;

  let store = createStore(getReducers(pages), {}, applyMiddleware(thunk));
  const butter = doInitSetup({ initialState, store, actionType });
  const body = renderToString(
    <Provider store={store}>
      <App {...butter}/>
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
