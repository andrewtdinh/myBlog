'use strict';

angular.module('ptc', ['firebase', 'ui.router'])
.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
  $stateProvider
  .state('home', {url: '/', templateUrl: '/views/home/home.html'})
  .state('about', {url: '/about', templateUrl: '/views/home/aboutMe.html'})
  .state('register', {url: '/register', templateUrl: '/views/users/users.html', controller: 'UsersCtrl'})
  .state('login', {url: '/login', templateUrl: '/views/users/users.html', controller: 'UsersCtrl'})
  .state('addBlog', {url: '/blogs/add', templateUrl: '/views/blogs/blogs.html', controller: 'BlogsCtrl'})
  .state('editBlog', {url: '/blogs/edit', templateUrl: '/views/blogs/blogs.html', controller: 'BlogsCtrl'});
}])
.run(['$rootScope', '$window', '$firebaseAuth', 'firebaseUrl', function($rootScope, $window, $firebaseAuth, firebaseUrl){
  $rootScope.fbRoot = new $window.Firebase(firebaseUrl);
  $rootScope.afAuth = $firebaseAuth($rootScope.fbRoot);
}]);
