'use strict';

angular.module('ptc')
.controller('HomeCtrl', ['$scope', 'User', 'Blog', function($scope, User, Blog){
  User.init();
  $scope.afBlogs = Blog.init();
  $scope.afUsers = Blog.initUsers();
  console.info('Inside the HomeCtrl');
  console.info('blog.$id: ');
}]);
