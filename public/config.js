angular.module('myApp', [
    'myApp.blogPosts',
    'myApp.blogContact',
    'myApp.blogServices',
    'myApp.portfolio',
    'ngRoute'
  ])

  .config(['$routeProvider', function($routeProvider) { 
    $routeProvider
      .when('/', {
        templateUrl: '/portfolio/portfolio.html',
        controller: 'portfolioController'
      })
      .when('/blog', {
        templateUrl: '/blog/blogTemplate.html',
        controller: 'contactController'
      })
      .when('/projects', {
        templateUrl: '/templates/projects.html',
        controller: 'projectController'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
