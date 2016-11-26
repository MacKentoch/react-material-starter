import React, {
  PropTypes,
  Component
}                     from 'react';
import cx             from 'classnames';
import shallowCompare from 'react-addons-shallow-compare';


class PageNotFound extends Component {
  state = {
    animated: true
  };

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

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

PageNotFound.propTypes = {

};

export default PageNotFound;
