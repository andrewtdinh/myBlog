'use strict';

angular.module('ptc')
.controller('NavCtrl', ['$scope', 'User', '$rootScope', '$state', function($scope, User, $rootScope, $state){
  User.init();
  $scope.afAuth.$onAuth(function(data) {
    if (data) {
      $rootScope.activeUser = data;
    }else {
      $rootScope.activeUser = null;
    }

    $state.go('home');
  });

  $scope.logout = function(){
    User.logout();
  };
}]);
