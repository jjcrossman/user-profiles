const userCtrl = require( "./userCtrl.js" );

module.exports = app => {
  app.post( "/api/login", userCtrl.login );
};
