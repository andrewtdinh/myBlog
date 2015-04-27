'use strict';

angular.module('ptc')
.controller('HomeCtrl', ['$state', '$scope', 'User', 'Blog', function($state, $scope, User, Blog){
  User.init();
  $scope.afBlogs = Blog.init();
  $scope.afUsers = Blog.initUsers();
  // $scope.display = true;
  console.info('Inside the HomeCtrl');
  $scope.displayFullBlog = function(user, blog){
    // var userUid = user.$id;
    // var blogKey = user.
    // $scope.display = !$scope.display;
    // $state.go('fullBlog', {uid:,blogKey:,blogIndex: };
    console.info('user: ', user, 'blog: ', blog);
  };
}]);
