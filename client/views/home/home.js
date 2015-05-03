'use strict';

angular.module('ptc')
.controller('HomeCtrl', ['$state', '$rootScope', '$scope', 'User', 'Blog', function($state, $rootScope, $scope, User, Blog){
  User.init();
  $rootScope.afBlogs = Blog.init();

  $scope.displayFullBlog = function(blog, index){
    if($rootScope.activeUser){
      var userUid = $rootScope.activeUser.$id;
      $scope.userUid = userUid;   //Handy to hide or show edit and delete buttons.
    }
    var blogKey = $rootScope.afBlogs.$keyAt(index);
    $state.go('fullBlog', {author: blog.author, blogKey: blogKey});
    console.info('blog: ', $rootScope.afBlogs.$keyAt(index), 'afBlogs keys: ', Object.keys($rootScope.afBlogs));
  };
}]);
