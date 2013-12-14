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
    .otherwise({
      redirectTo: '/'
    });
});
