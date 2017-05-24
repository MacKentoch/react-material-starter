// @flow weak

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
      <IndexRoute component={Home} onEnter={scrollToTop} />
      <Route path="/about" component={About} onEnter={scrollToTop} />
      
      <Route path="*" component={PageNotFound} onEnter={scrollToTop} />
    </Route>
  );
};

function scrollToTop() {
  window.scrollTo(0, 0);
}

export default Routes;
