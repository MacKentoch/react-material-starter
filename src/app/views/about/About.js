// @flow weak

import React, {
  PureComponent
}                         from 'react';
import PropTypes          from 'prop-types';
import cx                 from 'classnames';
import {
  Card,
  CardActions,
  CardTitle,
  CardText
}                         from 'material-ui/Card';
import FlatButton         from 'material-ui/FlatButton';

class About extends PureComponent {
  static propTypes = {
    // react-router 4:
    match:    PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history:  PropTypes.object.isRequired
  };

  enterAnimationTimer= null;

  state = {
    animated: true,
    viewEnters: false
  };

  componentDidMount() {
    this.enterAnimationTimer = setTimeout(this.setViewEnters, 500);
  }

  componentWillUnmount() {
    clearTimeout(this.enterAnimationTimer);
  }

  render() {
    const { animated, viewEnters } = this.state;

    return(
      <section
        id="about__container"
        className={
          cx({
            'content':       true,
            'animatedViews': animated,
            'invisible':     !viewEnters,
            'view-enter':    viewEnters
          })
        }>
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <div className="box">
              <Card>
                <CardTitle
                  title="About"
                  subtitle="View"
                />
                <CardText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                  Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                  Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                </CardText>
                <CardActions>
                  <FlatButton
                    label="go Home"
                    onTouchTap={this.routeToHome}
                  />
                  <FlatButton
                    label="go previous"
                    onTouchTap={this.goPreviousRoute}
                  />
                </CardActions>
              </Card>
            </div>
          </div>
        </div>
      </section>
    );
  }

  setViewEnters = () => {
    this.setState({viewEnters: true});
  }

  routeToHome = event => {
    event.preventDefault();
    const { history } = this.props;
    history.push({pathname: '/'});
  }

  goPreviousRoute = () => {
    const { history } = this.props;
    history.goBack();
  }
}

About.propTypes= {

};

About.contextTypes = {
  // for manual routing
  router: React.PropTypes.object.isRequired
};

export default About;
