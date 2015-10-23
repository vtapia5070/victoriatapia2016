angular.module("blog.posts", ['blog.services', 'ui.bootstrap'])

  .controller('postController', ['$scope', 'handleRequest', function ($scope, handleRequest) {
    $scope.init = function () {
      // console.log("Post controller initialized");
      handleRequest.getPost();
    };
    $scope.templates = [{
        name: 'post2',
        url: '/templates/_posts/modalsPost.html'
      },
      {
        name: 'post1',
        url: '/templates/_posts/post1.html'
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
