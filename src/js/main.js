import '../index.html';
import cssModules from 'react-css-modules';
import styles from '../css/styles.css';
// import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
// import '../../node_modules/font-awesome/css/font-awesome.css';

import msg from './msg.js';
document.querySelector('h1').textContent = `${msg.msg} 1`;
document.querySelector('h1').classList.add('jumbotron');

let Gg = () => <a className="btn btn-success" styleName="test">
  <i className="fa fa-camera-retro"></i>Hello!
</a>;
Gg = cssModules(Gg, styles);

ReactDOM.render(
  <Gg />,
  document.getElementById('example')
);
