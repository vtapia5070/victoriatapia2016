angular.module("blogApp", ['post.services'])

  .controller('contactController', ['$scope', function ($scope) {
    $scope.contact = false;
    $scope.bio = false;
    $scope.toggleContact = function (num) {
      console.log("contact has been clicked!");
      if (num === 2) {
        if ($scope.contact) {
          $scope.contact = false;
        } else {
          $scope.contact = true;
        }
      } else if (num === 1) {
        if ($scope.bio) {
          $scope.bio = false;
        } else {
          $scope.bio = true;
        }
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
