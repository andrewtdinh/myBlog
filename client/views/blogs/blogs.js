'use strict';

angular.module('ptc')
.controller('BlogsCtrl', ['$scope', '$state', '$rootScope', function($scope, $state, $rootScope){
  $scope.name = $state.current.name;
  // console.info('$state.current.name: ', $state.current.name);
  console.info('$rootScope.activeUser: ', $rootScope.activeUser);

  $scope.addBlog = function(blog){
    var o = {
      author: blog.author,
      title: blog.title,
      tags: blog.tags,
      body: blog.body,
      createdAt: $window.Firebase.ServerValue.TIMESTAMP
    };

    Task.add(o)
    .then(function(data){
      console.info('data', data);
      $scope.blog = {};
    });
  };
  

}]);
