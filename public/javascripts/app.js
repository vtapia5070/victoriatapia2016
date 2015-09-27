angular.module("blogApp", [])

  .controller('contactController', ['$scope', function ($scope) {
    $scope.test = "hello";
    $scope.contact = false;
    $scope.toggleContact = function () {
      if ($scope.contact) {
        $scope.contact = false;
      } else {
        $scope.contact = true;
      }
    };
  }])

  // .controller('postController', ['$scope', function ($scope) {


  // }])
