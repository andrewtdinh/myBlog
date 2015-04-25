'use strict';

angular.module('ptc')
.factory('User', ['$rootScope', '$state', function($rootScope, $state){
  function register(user){
    return $rootScope.afAuth.$createUser(user);
  }

  return {register: register};
}]);
