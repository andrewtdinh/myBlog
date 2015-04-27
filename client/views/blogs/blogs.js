'use strict';

angular.module('ptc')
.controller('BlogsCtrl', ['Blog', '$window', '$scope', '$state', '$rootScope', 'User', function(Blog, $window, $scope, $state, $rootScope, User){
  $scope.name = $state.current.name;
  User.init();
  $scope.afBlogs = Blog.init();

  console.info('$rootScope.activeUser: ', $rootScope.activeUser);

  $scope.addBlog = function(blog){
    if (!$scope.blog.author){
      $scope.blog.author = $rootScope.getEmailHandle($rootScope.activeUser.password.email);
      console.log('In the if block inside addBlog');
    }
    var tags = '';
    if ($scope.blog.tags) {
      tags = $scope.blog.tags;
      tags = tags.split(',').map(function(tag){
        return tag.trim();
      });
    }
    var blurb = makeBlurb($scope.blog.body, 100);
    var o = {
      author: $scope.blog.author,
      title: $scope.blog.title,
      tags: tags,
      body: $scope.blog.body,
      email: $rootScope.activeUser.password.email,
      blurb: blurb,
      postDate: $window.Firebase.ServerValue.TIMESTAMP
    };

    debugger;
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
