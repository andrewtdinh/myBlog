'use strict';

angular.module('ptc')
.factory('User', ['$rootScope', function($rootScope){
  function init(){
    $rootScope.getEmailHandle = function(email) {
      return email ? email.slice(0, email.indexOf('@')) : '';
    };
  }

  function register(user){
    return $rootScope.afAuth.$createUser(user);
  }
  function login(user){
    return $rootScope.afAuth.$authWithPassword(user);
  }
  function logout(){
    return $rootScope.afAuth.$unauth();
  }

  return {init: init, register: register, login: login, logout: logout};
}]);
