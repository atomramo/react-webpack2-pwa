import {render} from 'react-dom';
import React, {Component} from 'react';
import style from './style.css';
import '../m/css/materialize.css';
import { install } from 'offline-plugin/runtime';
//import '../m/js/materialize.min.js';
//import '../m/js/hammer.min.js';
//import "file-loader?name=vendor/js/materialize.min.[ext]!../m/js/materialize.min.js";
//import $ from 'jQuery';
import App from './components/App/App.js';


render(<App/>, document.getElementById('app'))

if (process.env.NODE_ENV === "production") {
  console.log("install");
  install();
}
