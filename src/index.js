import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
//import { Grid, Row, Col, Input, Button, Collapse } from 'react-bootstrap';
import { Router, browserHistory } from 'react-router';

import routes from './routes';
import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

//React.createElement(MyComponent, null)

/*<Provider store={createStoreWithMiddleware(reducers)}>
  <Router history={browserHistory} routes={routes} />
</Provider>*/
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
  , document.querySelector('.container'));
