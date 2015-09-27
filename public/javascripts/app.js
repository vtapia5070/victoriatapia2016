angular.module("blogApp", ['post.services'])

  .controller('contactController', ['$scope', function ($scope) {
    $scope.contact = false;
    $scope.toggleContact = function () {
      console.log("contact has been clicked!");
      if ($scope.contact) {
        $scope.contact = false;
      } else {
        $scope.contact = true;
      }
    };
  }])

  .controller('postController', ['$scope', 'handleRequest', function ($scope, handleRequest) {
    $scope.init = function () {
      console.log("Post controller initialized");
      handleRequest.getPost();
      //console.log("called get request");
    }
    $scope.init();
  }])
