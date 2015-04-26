'use strict';

angular.module('ptc')
.controller('BlogsCtrl', ['$scope', '$state', function($scope, $state){
  $scope.name = $state.current.name;
  console.info('$state.current.name: ', $state.current.name);
}]);
