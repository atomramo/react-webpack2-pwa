import {render} from 'react-dom';
import React, {Component} from 'react';
import style from './style.css';
import './vendor/css/material.min.css';
import './vendor/js/material.min.js';
//import $ from 'jQuery';
import App from './components/App/App.js';


render(<App/>, document.getElementById('app'))


if (process.env.NODE_ENV == "production") {
  //Registers the service worker
  if ("serviceWorker" in navigator) {
    window.addEventListener('load', function(){
      navigator.serviceWorker.register('./service-worker.js').then(function(registration) {
        //Registation was successful
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
      }).catch(function(error) {
        //Registrarion failed
        console.log('Service Worker registration failed: ',error);
      });
    });
  }
}
