import ListStore from './stores/ListStore';
import App from './components/Main.js';
import React from 'react';
import ReactDOM from 'react-dom';
import Server from './api/server';
import 'react-fastclick';
import Tools from './lib/tools'
import './less/index.less';
import './less/detail.less';

var  a = {};
a.b = [312312,12312];
var b = {c:{
  d:312321
}};

console.log(Tools.getValue(a,'b'))
console.log(Tools.getValue(a,'c'))
console.log(Tools.getValue(a,'b.c'))
console.log(Tools.getValue(b,'c.d'))
console.log(Tools.getValue(b,'c.d.e'))


ReactDOM.render(
  <App/>,
  document.getElementById('root')
);


