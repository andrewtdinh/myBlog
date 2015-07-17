'use strict';

angular.module('ptc')
.controller('FullBlogCtrl', ['Blog', '$scope', '$state', 'marked', function(Blog, $scope, $state, marked){
  $scope.name = $state.current.name;
  var blogKey = $state.params.blogKey;
  $scope.blog = Blog.getBlog(blogKey);
}]);
