angular.module('userProfiles')
.controller('profileCtrl', function( $scope, friendService, userInfo ) {
	$scope.currentUser = userInfo.currentUser;
	$scope.friends = userInfo.friends;
});
