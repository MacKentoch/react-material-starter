/* eslint no-process-env:0 */
import React from 'react';
import {
  Router,
  Route,
  IndexRoute,
  hashHistory
  // browserHistory
 }                              from 'react-router';
// import { Provider }             from 'react-redux';
import { App }                  from '../containers';
import {
  Home,
  PageNotFound
}                               from '../views';

export const Routes = () => {
  return (
    <Router history={hashHistory}>
      <Route path="/" component={App} >
        <IndexRoute component={Home} />

        <Route path="*" component={PageNotFound} />
      </Route>
    </Router>
  );
};
