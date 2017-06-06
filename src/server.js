import express from 'express';
import React from 'react';
import template from './template';
import { renderToString } from 'react-dom/server';
import App from './app';
import pages from './pages';


const server = express();
server.use('/assets', express.static('assets'));

const finisher = (data, res) => {
  const {templateName, initialState, title} = data;
  const body = renderToString(<App {...{templateName, initialState}} />);
  res.send(template(Object.assign({}, data, {body})));
};

Object.keys(pages).forEach((pageKey) => {
  const page = pages[pageKey];
  server.get(page.path, (req, res) => {
    page.loader(req, (data) => finisher(data, res));
  });
});

server.listen(8080);
console.log('listening');
