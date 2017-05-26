// @flow weak

export const appConfig = {
  // dev mode to mock async data for instance
  DEV_MODE: true,
  // When you need some kind "console spam" to debug
  DEBUG_ENABLED: true,
  // fake delay to mock async
  FAKE_ASYNC_DELAY: 1000,

  APP_NAME: 'reactMaterialStarter',

  DRAWER: {
    menus: [
      {id: 1, title: 'Home', routeName: '/'},
      {id: 2, title: 'About', routeName: 'about'}
    ]
  }

};
