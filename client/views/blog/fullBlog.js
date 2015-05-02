'use strict';

angular.module('ptc')
.controller('FullBlogCtrl', ['Blog', '$window', '$scope', '$state', '$rootScope', 'User', function(Blog, $window, $scope, $state, $rootScope, User){
  $scope.name = $state.current.name;
  var blogKey = $state.params.blogKey;
  $scope.blog = Blog.getBlog(blogKey);
}]);
