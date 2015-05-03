'use strict';

angular.module('ptc')
.factory('Blog', ['$firebaseObject', 'User', '$rootScope', '$firebaseArray', function($firebaseObject, User, $rootScope, $firebaseArray){
  User.init();
  $rootScope.afBlogs = init();

  function init(){
    var fbBlogs = $rootScope.fbRoot.child('blogs');
    var afBlogs = $firebaseArray(fbBlogs);
    return afBlogs;
  }

  function add(blog){
    return $rootScope.afBlogs.$add(blog);
  }

  function getBlog(blogKey){
    var fbBlog = $rootScope.fbRoot.child('/blogs/' + blogKey);
    var afBlog = $firebaseObject(fbBlog);
    console.log('afBlog inside getBlog: ', afBlog);
    return afBlog;
  }

  return {add: add, init: init, getBlog: getBlog};
}]);
