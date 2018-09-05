import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';

var createBrowserHistory = require('history/lib/createBrowserHistory');

// Import components

import NotFound from './components/NotFound';
import StorePicker from './components/StorePicker';
import App from './components/App';

// Firebase

// var Rebase = require('re-base');
// var base = Rebase.createClass('https://catch-of-the-day-f4ba5.firebaseio.com');

// var Catalyst = require('react-catalyst');

// Routes

var routes = (
  <Router history={createBrowserHistory()}>
    <Route path="/" component={StorePicker}/>
    <Route path="/store/:storeId" component={App}/>
    <Route path="*" component={NotFound}/>
  </Router>
)

ReactDOM.render(routes, document.querySelector('#main'));
