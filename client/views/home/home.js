'use strict';

angular.module('ptc')
.controller('HomeCtrl', ['$state', '$rootScope', '$scope', 'User', 'Blog', function($state, $rootScope, $scope, User, Blog){
  User.init();
  $rootScope.afBlogs = Blog.init();
  $rootScope.afUsers = Blog.initUsers();

  $scope.displayFullBlog = function(user, blog, index){
    var userUid = user.$id;
    var blogKey = $rootScope.afBlogs.$keyAt(index);
    $state.go('fullBlog', {uid: userUid, blogKey: blogKey});
    console.info('user: ', user, 'blog: ', $rootScope.afBlogs.$keyAt(index), 'afBlogs: ', Object.keys($rootScope.afBlogs));
  };
}]);
