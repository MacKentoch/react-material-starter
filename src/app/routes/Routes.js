/* eslint no-process-env:0 */
import React from 'react';
import {
  Route,
  IndexRoute
 }                              from 'react-router';
import { App }                  from '../containers';
import {
  Home,
  About,
  PageNotFound
}                               from '../views';

const Routes = () => {
  return (
    <Route path="/" component={App} >
      <IndexRoute component={Home} />
      <Route path="/about" component={About} />

      <Route path="*" component={PageNotFound} />
    </Route>
  );
};

export default Routes;
