import '../index.html';
import '../css/styles.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';

import msg from './msg.js';
document.querySelector('h1').textContent = `${msg.msg} 1`;
document.querySelector('h1').classList.add('jumbotron');

ReactDOM.render(
    <h1>Hello!</h1>,
    document.getElementById('example')
);
