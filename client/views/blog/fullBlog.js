'use strict';

angular.module('ptc')
.controller('FullBlogCtrl', ['Blog', '$scope', '$state', function(Blog, $scope, $state){
  $scope.name = $state.current.name;
  var blogKey = $state.params.blogKey;
  $scope.blog = Blog.getBlog(blogKey);
}]);
