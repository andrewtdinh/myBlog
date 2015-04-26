'use strict';

angular.module('ptc')
.factory('User', ['$rootScope', '$state', function($rootScope, $state){
  function register(user){
    return $rootScope.afAuth.$createUser(user);
  }
  function login(user){
    return $rootScope.afAuth.$authWithPassword(user);
  }
  function logout(){
    return $rootScope.afAuth.$unauth();
  }

  return {register: register, login: login, logout: logout};
}]);
