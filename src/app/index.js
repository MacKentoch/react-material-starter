import React                from 'react';
import { render }           from 'react-dom';
import injectTpEventPlugin  from 'react-tap-event-plugin';
import MuiThemeProvider     from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme          from 'material-ui/styles/getMuiTheme';
import Theme                from './theme';
import { AppContainer }     from 'react-hot-loader';
import Root                 from './Root';
import routes               from './routes/Routes';


import 'babel-polyfill';
import 'animate.css';
import 'font-awesome/css/font-awesome.min.css';
import 'ionicons/dist/css/ionicons.css';
import 'flexboxgrid/dist/flexboxgrid.min.css';
import './style/index.style.scss';

const ELEMENT_TO_BOOTSTRAP = 'root';
const BootstrapedElement = document.getElementById(ELEMENT_TO_BOOTSTRAP);

injectTpEventPlugin();


const renderApp = appRoutes => {
  render(
    <AppContainer>
      <MuiThemeProvider muiTheme={getMuiTheme(Theme)}>
        <Root routes={appRoutes} />
      </MuiThemeProvider>
    </AppContainer>,
    BootstrapedElement
  );
};

renderApp(routes);

if (module.hot) {
  module.hot.accept(
    './routes/Routes',
    () => {
      const newRoutes = require('./routes/Routes').default;
      renderApp(newRoutes);
    }
  );
}

// const AllApp = () => (
//   <MuiThemeProvider muiTheme={getMuiTheme(Theme)}>
//     <Routes />
//   </MuiThemeProvider>
// );
//
// ReactDOM.render(<AllApp />, BootstrapedElement);
