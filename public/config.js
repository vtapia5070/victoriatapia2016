angular.module('blog', [
    'blog.posts',
    'blog.contact',
    'blog.projects',
    'blog.services',
    'ngRoute'
  ])

  .config(['$routeProvider', function($routeProvider) { 
    $routeProvider
      .when('/', {
        templateUrl: '/templates/posts.html',
        controller: 'postController'
      })
      .when('/projects', {
        templateUrl: '/templates/projects.html',
        controller: 'projectController'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
//hello