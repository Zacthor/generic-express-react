import React from 'react';
import App from './app';

const templates = {
  App,
};


export default function Index({
  templateName,
  initialState,
}) {
  const Template = templates[templateName];
  return (<Template {...initialState} />);
}
