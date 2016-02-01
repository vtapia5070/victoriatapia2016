angular.module('myApp', [
    'myApp.blogPosts',
    'myApp.blogContact',
    'myApp.blogServices',
    'myApp.projects',
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
        templateUrl: '/projects/projects.html',
        controller: 'projectController'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
