'use strict';

angular.module('ptc')
.controller('UsersCtrl', ['$scope', '$rootScope', '$state', 'User', function($scope, $rootScope, $state, User){
  $scope.submit = function(user){
    console.info('$state is:', $state.current.name);
  };
}]);
