angular.module('userProfiles')
.factory('friendService', function( $http ) {
  return {

    login: function( user ) {
      return $http.post( "/api/login", JSON.stringify( user ) );
    },

    getFriends: function() {
    	return $http.get( "/api/profile" ).then( function( response ) {
        return response.data;
      } );
    }
  }
});
