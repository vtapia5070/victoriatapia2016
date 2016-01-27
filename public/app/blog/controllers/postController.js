angular.module("myApp.blogPosts", ['ui.bootstrap'])

  .controller('postController', ['$scope', 'handleRequest', function ($scope, handleRequest) {
    $scope.init = function () {
      // console.log("Post controller initialized");
      handleRequest.getPost();
    };
    $scope.templates = [
      {
        name: 'post4',
        url: '/app/blog/templates/posts/post4linkedList.html'
      },
      {
        name: 'post3',
        url: '/app/blog/templates/posts/post3CloudComputing.html'
      },
      {
        name: 'post2',
        url: '/app/blog/templates/posts/post2Modals.html'
      },
      {
        name: 'post1',
        url: '/app/blog/templates/posts/post1.html'
      }];
    $scope.init();
  }]);
