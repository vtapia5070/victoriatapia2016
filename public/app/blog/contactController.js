angular.module("blog.contact", ['blog.services', 'ui.bootstrap'])

.controller('contactController', ['$scope', 'handleRequest', '$modal', '$log', function ($scope, handleRequest, $modal, $log) {
    $scope.contact = false;
    $scope.bio = false;
    $scope.animationsEnabled = true;
    $scope.submitted = false;
    $scope.status = '';
    $scope.info = {};

    $scope.showForm = function (size) {
      $scope.submitted = false;
      var modalInstance = $modal.open({
        templateUrl: '/templates/emailForm.html',
        scope: $scope,
        size: size,
        controller: ['$scope', '$modalInstance', function($scope, $modalInstance, handleRequest) {
          $scope.ok = function () { 
            $modalInstance.close($scope.info);
          };
          $scope.cancel = function () { $modalInstance.dismiss('cancel'); };
        }],
      });
      modalInstance.result.then(function (info) {
        $scope.info.name = info.name;
        $scope.info.email = info.email;
        $scope.info.text = info.text;
        handleRequest.sendPost($scope.info, function (response) {
          // console.log("response is", response);
          $scope.status = response;
          $scope.submitted = true;
        });
        },
      function () {
        $log.info('Modal dismissed at: ' + new Date());
      });
    };
  }]);
