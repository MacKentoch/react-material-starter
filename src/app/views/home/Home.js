import React, {
  PropTypes,
  Component
}                         from 'react';
import cx                 from 'classnames';
import shallowCompare     from 'react-addons-shallow-compare';


class Home extends Component {

  state = {
    animated: true,
    viewEnters: false
  };

  componentDidMount() {
    this.enterAnimationTimer = setTimeout(
      () => this.setViewEnters,
      500
    );
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  componentWillUnmount() {
    clearTimeout(this.enterAnimationTimer);
  }

  render() {
    const { animated, viewEnters } = this.state;

    return(
      <section
        className={
          cx({
            'content':       true,
            'animatedViews': animated,
            'invisible':     !viewEnters,
            'view-enter':    viewEnters
          })
        }>
        <h1>
          Home
        </h1>
      </section>
    );
  }

  setViewEnters = () => {
    this.setState({viewEnters: true});
  }
}

Home.propTypes= {

};

export default Home;
