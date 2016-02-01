angular.module('myApp.projects', [])

.controller('projectController', ['$scope', function ($scope) {
  $scope.test = "Hello projects controller";
}]);