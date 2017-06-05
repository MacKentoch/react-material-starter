// @flow weak

import React, {
  PureComponent
}                     from 'react';
// import PropTypes      from 'prop-types';
import cx             from 'classnames';


class PageNotFound extends PureComponent {
  static propTypes = {};

  state = {
    animated: true
  };

  render() {
    const { animated } = this.state;

    return(
      <section
        className={
          cx({
            'content': true,
            'animatedViews': animated,
            'view-enter': animated
          })}>
        <div className="row">
          <div className="col-md-12">
            <h2>
              <i
                className="fa fa-frown-o"
                ariaHidden="true"
              />
              &nbsp;
              Sorry... This page does not exist
            </h2>
          </div>
        </div>
      </section>
    );
  }
}

export default PageNotFound;
