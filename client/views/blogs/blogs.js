'use strict';

angular.module('ptc')
.controller('BlogsCtrl', ['marked', 'Blog', '$window', '$scope', '$state', '$rootScope', 'User', function(marked, Blog, $window, $scope, $state, $rootScope, User){
  $scope.name = $state.current.name;
  User.init();
  $scope.afBlogs = Blog.init();

  console.info('$rootScope.activeUser: ', $rootScope.activeUser);

  $scope.addBlog = function(blog){
    if (!$scope.blog.author){
      $scope.blog.author = $rootScope.getEmailHandle($rootScope.activeUser.password.email);
    }
    var tags = '';
    if ($scope.blog.tags) {
      tags = $scope.blog.tags;
      tags = tags.split(',').map(function(tag){
        return tag.trim();
      });
    }
    var title = '';
    if ($scope.blog.title){
      title = $scope.blog.title;
    }
    var blurb = makeBlurb($scope.blog.body, 100);
    var o = {
      author: $scope.blog.author,
      title: title,
      tags: tags,
      body: $scope.blog.body,
      email: $rootScope.activeUser.password.email,
      blurb: blurb,
      postDate: $window.Firebase.ServerValue.TIMESTAMP,
      userUid: $rootScope.activeUser.uid
    };

    console.info('$rootScope.activeUser.uid: ', o.userUid);
    Blog.add(o)
    .then(function(data){
      console.info('data', data); //I think we can directly go to the post after the post
      $state.go('home');
    });
  };

  function makeBlurb(post, strLength){
    return post ? post.slice(0, strLength) + '...' : '';
  }


}]);
