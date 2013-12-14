angular.module('shortlyApp')


.controller('HomeController', function($scope, $http) {
  $scope.name = 'Shortly';
})
.controller('formController', function($scope, $http) {
  $scope.name = 'formController';
  $scope.formData = {};
  $scope.send = {
    sendStuff : function(form) {
      if(form.$valid) {
        $http({
          method: "POST",
          url: "/links",
          data: JSON.stringify($scope.formData),
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        })
        .success(function(data) {
          console.log(data);
        });
      }
    }
  };
})

// LINKS SHIT
.controller('LinksController', function($scope, $http) {
  $scope.name = 'links';
  $scope.visits = {};
  $http({
    method: 'GET',
    url: '/links'
    }).then(function(data) {
      console.log(data);
      $scope.data = data.data;
    });
})

// STATS
.controller("StatsController", function($scope) {
  $scope.name = 'stats';
})

// LOGIN
.controller('LoginController', function($scope, $http) {
  $scope.name = 'login';
  $scope.loginData = {};
  $scope.login= {
    send: function(form) {
      if(form.$valid) {
        $http({
          method: 'POST',
          url: '/api/login',
          data: JSON.stringify($scope.loginData)
        }).then(function(data) {
          console.log(data);
        });
      }
    }
  };
});