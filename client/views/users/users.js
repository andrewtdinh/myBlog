'use strict';

angular.module('checklist')
.controller('UsersCtrl', ['$scope', 'User', '$state', '$rootScope',  function($scope, User, $state, $rootScope){
  console.info('$state is:', $state.current.name);
  $scope.name = $state.current.name;

  $scope.submit = function(user){
    if ($scope.name === 'register'){
      User.register(user)
      .then(function(data){
        $state.go('login');

        console.info(data);
      })
      .catch(function(err){
        console.error(err);
      });
    } else {
      User.login(user)
      .then(function(data){
        $rootScope.activeUser = data;
        $state.go('home');
        console.info(data);
      })
      .catch(function(err){
        console.error(err);
      });
    }
  };
}]);
