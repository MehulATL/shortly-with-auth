angular.module('shorlyApp')
.factory('LinkService', function(/* dependency injection */ $q, $http){
  var service = {
    getLinks: function(){
      var d = $q.defer();
      $http({
        method: 'GET',
        url: 'balkdjfblkad',
      }).success(function(data){
        d.resolve(data);
        //link['data'] = new Date(link.created_at);
      }).error(function(data){
        d.reject(reason);
      });
      return d.promise;
    }
  };
  return service;
})

.factory('Session', function($q, $http){
  var service = {
    currentUser: null,
    isLoggedIn: function(){
      return !!service.currentUser;
    },
    login: function(username, password){
      var d = $q.defer();
      $http({
        method: 'POST',
        url: '/api/login',
        params: {username: username, password: password}
      }).success()
    }
  };
  return service;
})