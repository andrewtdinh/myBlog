'use strict';

angular.module('ptc')
.controller('BlogsCtrl', ['Blog', '$window', '$scope', '$state', '$rootScope', 'User', function(Blog, $window, $scope, $state, $rootScope, User){
  $scope.name = $state.current.name;
  User.init();

  console.info('$rootScope.activeUser: ', $rootScope.activeUser);

  $scope.addBlog = function(blog){
    if (!$scope.blog.title){
      $scope.blog.title = $rootScope.getEmailHandle($state.current.name);
    }
    var blurb = makeBlurb($scope.blog.body, 100);
    var o = {
      author: $scope.blog.author,
      title: $scope.blog.title,
      tags: $scope.blog.tags,
      body: $scope.blog.body,
      email: $rootScope.activeUser,
      blurb: blurb,
      postDate: $window.Firebase.ServerValue.TIMESTAMP
    };

    Blog.add(o)
    .then(function(data){
      console.info('data', data);
      $scope.blog = {};
    });
  };

  function makeBlurb(post, strLength){
    return post ? post.slice(0, strLength) : '';
  }


}]);
