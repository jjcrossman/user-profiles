const profileCtrl = require( "./profileCtrl.js" );

module.exports = app => {
  app.get( "/api/profile", profileCtrl.getProfile );
};
