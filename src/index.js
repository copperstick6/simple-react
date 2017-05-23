import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Calculator from './Calculator';
import Clock from './Clock'
import registerServiceWorker from './registerServiceWorker';
import './index.css';



ReactDOM.render(
    <Clock />,
    document.getElementById('root')
  )
registerServiceWorker();
