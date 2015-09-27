angular.module("blogApp", ['post.services'])

  .controller('contactController', ['$scope', 'handleRequest', function ($scope, handleRequest) {
    $scope.contact = false;
    $scope.bio = false;
    $scope.toggleContact = function (num) {
      console.log("contact has been clicked!");
      if (num === 2) {
        if ($scope.contact) {
          $scope.contact = false;
        } else {
          $scope.bio = false;
          $scope.contact = true;
        }
      } else if (num === 1) {
        if ($scope.bio) {
          $scope.bio = false;
        } else {
          $scope.contact = false;
          $scope.bio = true;
        }
      }
    };

    $scope.info = {
      name:'',
      email: '',
      text: ''
    };

    $scope.sendPost = function() {
      console.log("sendPost has been called");
      handleRequest.sendPost($scope.info);
    }
  }])

  .controller('postController', ['$scope', 'handleRequest', function ($scope, handleRequest) {
    $scope.init = function () {
      console.log("Post controller initialized");
      handleRequest.getPost();
      //console.log("called get request");
    }
    $scope.init();
  }])
