import express from 'express';
import React from 'react';
import template from './template';
import { renderToString } from 'react-dom/server';
import pages from './pages';


const server = express();
server.use('/assets', express.static('assets'));

const finisher = (data, res, App) => {
  const {templateName, initialState, title} = data;
  const body = renderToString(<App {...initialState} />);
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
