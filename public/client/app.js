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
    .when('/signup', {
      controller: 'StatsController',
      templateUrl: 'client/templates/login.html'
    })
    .otherwise({
      redirectTo: '/'
    });
})
.config(['$httpProvider', function($httpProvider) {
  $httpProvider.responseInterceptors.push(['$q', function($q) {
    return function(promise) {
      return promise.then(function(response) {
        response.data.extra = 'Interceptor strikes back';
        return response;
      },
      function(response) {
        if (response.status === 401) {
          response.data = {
            status: false,
            description: 'Authentication required!'
          };
          return response;
        }
        return $q.reject(response);
      });
    };
  }]);
}]);