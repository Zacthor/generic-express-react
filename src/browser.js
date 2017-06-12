import React from 'react';
import { render } from 'react-dom';
import pages from './pages';

const initialState = window['__APP_INITIAL_STATE__'];
const { App } = pages[initialState.templateName];
render(<App {...initialState} />, document.getElementById('root'));
