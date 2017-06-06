// @flow weak

import React, {
  Component
}                 from 'react';
// import PropTypes  from 'prop-types';
import {
  BrowserRouter as Router
}                               from 'react-router-dom';
import { createBrowserHistory } from 'history';
import App                      from './containers/app/App';

const history = createBrowserHistory();

class Root extends Component {
  render() {
    return (
      <Router history={history}>
        <App />
      </Router>
    );
  }
}

export default Root;
