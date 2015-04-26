'use strict'

angular.module('ptc')
.controller('HomeCtrl', ['$scope', 'User', function($scope, User){
  User.init();
  console.info('Inside the HomeCtrl');
  console.info('blog.$id: ');
}]);
