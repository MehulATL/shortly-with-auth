angular.module('shortlyApp')


.controller('HomeController', function($scope, $http) {
  $scope.name = 'home temp';
})
.controller('formController', function($scope, $http) {
  $scope.name = 'formController';
  $scope.formData = {};
  $scope.sendStuff = function() {
    $http({
      method: "POST",
      url: "/links",
      data: JSON.stringify($scope.formData),
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    })
    .success(function(data) {
      console.log(data);
    });
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
});