angular.module("blogApp", ['post.services', 'ui.bootstrap'])

  .controller('postController', ['$scope', 'handleRequest', function ($scope, handleRequest) {
    $scope.init = function () {
      console.log("Post controller initialized");
      handleRequest.getPost();
    }
    $scope.init();
  }])

  .controller('contactController', ['$scope', 'handleRequest', '$modal', '$log', function ($scope, handleRequest, $modal, $log) {
    $scope.contact = false;
    $scope.bio = false;
    $scope.animationsEnabled = true;
    $scope.info = {
      name:'',
      email: '',
      text: ''
    };
    
    $scope.showForm = function (size) {
      $scope.message = "Show Form Button Clicked";
      console.log($scope.message);
      var modalInstance = $modal.open({
        templateUrl: 'templates/emailForm.html',
        scope: $scope,
        size: size,
        controller: function($scope, $modalInstance, handleRequest) {
          $scope.ok = function () { 
            console.log($scope.info);
            $modalInstance.close($scope.info);
          };
          $scope.cancel = function () { $modalInstance.dismiss('cancel'); };
        },
      });
      modalInstance.result.then(function (user) {
        $scope.user = user;
        console.log(user);
        console.log("sendPost has been called");
        handleRequest.sendPost($scope.info);
        },
      function () {
        $log.info('Modal dismissed at: ' + new Date());
      });
    };

  }])
