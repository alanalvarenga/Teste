import React from 'react';
import ReactDOM from 'react-dom';
//import { Provider } from 'react-redux';
//import { createStore, applyMiddleware } from 'redux';
//import { Grid, Row, Col, Input, Button, Collapse } from 'react-bootstrap';
//import Wavesurfer from './react-wavesurfer';
import MyComponent from './mycomponent';


//import App from './components/app';
//import reducers from './reducers';

//const createStoreWithMiddleware = applyMiddleware()(createStore);


ReactDOM.render(React.createElement(MyComponent, null)
  , document.querySelector('.container'));
