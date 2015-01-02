'use strict';

/* Controllers */

var userCRUDControllers = angular.module('userCRUDControllers', []);

userCRUDControllers.controller('UserListCtrl', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('users/users.json').success(function(data) {
      $scope.users = data;
      //$scope.users = data.splice(0, 2);
    });



  $scope.temp = "World";

  $scope.orderProp = 'last_name';

}]);

userCRUDControllers.controller('UserDetailCtrl', ['$scope', '$routeParams', '$http',
  function($scope, $routeParams, $http) {
    //$scope.userId = $routeParams.userId;
    $http.get('users/' + $routeParams.userId + '.json').success(function(data) {
      $scope.user = data;
    });
}]);


