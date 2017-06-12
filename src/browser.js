import React from 'react';
import { render } from 'react-dom';
import pages from './pages';

const appState = window['__APP_INITIAL_STATE__'];
const { initialState } = appState;
const { App } = pages[appState.templateName];
render(<App {...initialState} />, document.getElementById('root'));
