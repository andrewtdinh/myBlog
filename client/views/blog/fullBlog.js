'use strict';

angular.module('ptc')
.controller('FullBlogCtrl', ['md', 'Blog', '$scope', '$state', function(md, Blog, $scope, $state){
  $scope.name = $state.current.name;
  var blogKey = $state.params.blogKey;
  $scope.blog = Blog.getBlog(blogKey);
}]);
