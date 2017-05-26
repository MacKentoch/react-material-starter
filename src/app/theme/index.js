// @flow weak

import {
  cyan500,
  cyan700,
  pinkA200,
  grey100,
  grey300,
  grey400,
  grey500,
  white,
  darkBlack,
  fullBlack,
  indigo900
}               from 'material-ui/styles/colors';
import {fade}   from 'material-ui/utils/colorManipulator';
import spacing  from 'material-ui/styles/spacing';

export default {
  spacing: spacing,
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color:      cyan500,
    primary2Color:      cyan700,
    primary3Color:      grey400,
    accent1Color:       pinkA200,
    accent2Color:       grey100,
    accent3Color:       grey500,
    textColor:          darkBlack,
    alternateTextColor: white,
    canvasColor:        white,
    borderColor:        grey300,
    disabledColor:      fade(darkBlack, 0.3),
    pickerHeaderColor:  cyan500,
    clockCircleColor:   fade(darkBlack, 0.07),
    shadowColor:        fullBlack
  },
  appBar: {
    color: indigo900
  },
  zIndex: {
    // ==>  defaults values:
    // menu: 1000,
    // appBar: 1100,
    // leftNavOverlay: 1200,
    // leftNav: 1300,
    // dialogOverlay: 1400,
    // dialog: 1500,
    // layer: 2000,
    // popover: 2100,
    // snackbar: 2900,
    // tooltip: 3000
    appBar:         1300,
    leftNavOverlay: 1100,
    leftNav:        1200
  }
};
