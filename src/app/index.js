import React                from 'react';
import ReactDOM             from 'react-dom';
import injectTpEventPlugin  from 'react-tap-event-plugin';
import { Routes }           from './routes/Route';
import MuiThemeProvider     from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme          from 'material-ui/styles/getMuiTheme';
import Theme                 from './theme';

import 'babel-polyfill';
import 'animate.css';
import 'font-awesome/css/font-awesome.min.css';
import 'ionicons/dist/css/ionicons.css';
import 'flexboxgrid/dist/flexboxgrid.min.css';
import './style/index.style.scss';

const ELEMENT_TO_BOOTSTRAP = 'root';
const BootstrapedElement = document.getElementById(ELEMENT_TO_BOOTSTRAP);

injectTpEventPlugin();

const AllApp = () => (
  <MuiThemeProvider muiTheme={getMuiTheme(Theme)}>
    <Routes />
  </MuiThemeProvider>
);

ReactDOM.render(<AllApp />, BootstrapedElement);
