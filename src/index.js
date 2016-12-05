import App from './components/Main.js';
import React from 'react';
import ReactDOM from 'react-dom';
import 'react-fastclick';
import './less/index.less';
import ListStore from './stores/ListStore';

let listStore = new ListStore();
ReactDOM.render(
  <App listStore={listStore}/>,
  document.getElementById('root')
);


