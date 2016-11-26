import React, {
  PropTypes,
  Component
}                           from 'react';
import { appConfig }        from '../../config';
import AppBar               from 'material-ui/AppBar';
// import { navigation }         from '../../models';

class App extends Component {

  state = {
    appName: appConfig.APP_NAME
  };

  render() {
    const { children } = this.props;

    return (
      <div>
        <AppBar
          title="Title"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
        />
        <h1>
          App test
        </h1>
        {children}
      </div>
    );
  }
}

App.propTypes = {
  children:   PropTypes.node.isRequired,
  history:    PropTypes.object,
  location:   PropTypes.object
};

export default App;
