'use strict';

angular.module('ptc')
.controller('NavCtrl', ['$scope', 'User', '$rootScope', '$state', function($scope, User, $rootScope, $state){
  User.init();  //so that we can get the email handle
  $scope.afAuth.$onAuth(function(data){
    if(data){
      $rootScope.activeUser = data;
      $rootScope.displayName = getDisplayName(data);
    }else{
      $rootScope.activeUser = null;
      $rootScope.displayName = null;
    }
    $state.go('home');
  });

  $scope.logout = function(){
    User.logout();
  };

  function getDisplayName(data){
    switch(data.provider){
      case 'password':
        return data.password.email;
      case 'twitter':
        return data.twitter.username;
      case 'github':
        return data.github.username;
      case 'google':
        return data.google.displayName;
      case 'facebook':
        return data.facebook.displayName;
      case 'anonymous':
        return data.provider;
    }
  }
}]);
