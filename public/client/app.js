angular.module('shortlyApp', [
  'ngRoute'
])
.config(function($routeProvider){
  $routeProvider
    .when('/', {
      controller: 'HomeController',
      templateUrl: 'client/templates/main.html'
    })
    .when('/links', {
      controller: 'LinksController',
      templateUrl: 'client/templates/links.html'
    })
    .when('/stats', {
      controller: 'StatsController',
      templateUrl: 'client/templates/stats.html'
    })
    .when('/login', {
      controller: 'StatsController',
      templateUrl: 'client/templates/login.html'
    })
    .otherwise({
      redirectTo: '/'
    });
});
