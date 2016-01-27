angular.module("blog.posts", ['blog.services', 'ui.bootstrap'])

  .controller('postController', ['$scope', 'handleRequest', function ($scope, handleRequest) {
    $scope.init = function () {
      // console.log("Post controller initialized");
      handleRequest.getPost();
    };
    $scope.templates = [
      {
        name: 'post4',
        url: 'posts/templates/post4linkedList.html'
      },
      {
        name: 'post3',
        url: 'posts/templates/post3CloudComputing.html'
      },
      {
        name: 'post2',
        url: 'posts/templates/post2Modals.html'
      },
      {
        name: 'post1',
        url: 'posts/templates/post1.html'
      }];
    $scope.editorOptions = {
      lineWrapping : true,
      lineNumbers: true,
      mode: 'javascript',
      theme: 'pastel-on-dark',
      autofocus: true,
      autoCloseBrackets: true,
      readOnly: true
    };
    $scope.init();
  }]);
