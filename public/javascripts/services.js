angular.module('post.services', [])

.service('handleRequest', ['$http', function ($http) {
  this.getPost = function () {
    console.log("get request in process!");
    $http.get('/')
      .then(function (data) {
        console.log("data is", data);
      }, function (err) {
        console.log("error is", err);
      }) 
  };
}])