'use strict';

angular.module('ptc')
.controller('UsersCtrl', ['$scope', '$rootScope', '$state', 'User', function($scope, $rootScope, $state, User){
  console.info('$state is:', $state.current.name);
  $scope.name = $state.current.name;

  $scope.submit = function(user){
    if ($scope.name === 'register') {
      User.register(user)
      .then(function(data){
        console.log('Successfully registerd user with data: ', data);
        $state.go('login');
      })
      .catch(function(error){
        alert('An error occurred during registration.  Please check your username and password');
        console.log('registration error: ' , error);
      });
    }
  };
}]);
