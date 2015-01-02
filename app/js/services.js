var userCRUDServices = angular.module('userCRUDServices', ['ngResource']);

userCRUDServices.factory('User', ['$resource',
  function($resource){
    return $resource('users/:userId.json', {}, {
      query: {method:'GET', params:{userId:'users'}, isArray:true}
    });
  }]);
