'use strict';

/* Controllers */

var userCRUDControllers = angular.module('userCRUDControllers', []);

/*
userCRUDControllers.controller('UserListCtrl', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('users/users.json').success(function(data) {
      $scope.phones = data;
      //$scope.users = data.splice(0, 2);
    });

  $scope.temp = "World";

  $scope.orderProp = 'last_name';

}]);
*/

userCRUDControllers.controller('UserListCtrl', ['$scope', 'User',
  function ($scope, User) {
      $scope.users = User.query();
      $scope.orderProp = 'last_name';
      $scope.temp = "World";
}]);


/*
userCRUDControllers.controller('UserDetailCtrl', ['$scope', '$routeParams', '$http',
  function($scope, $routeParams, $http) {
    //$scope.userId = $routeParams.userId;
    $http.get('users/' + $routeParams.userId + '.json').success(function(data) {
      $scope.user = data;
    });
}]);
*/

userCRUDControllers.controller('UserDetailCtrl', ['$scope', '$routeParams', 'User',
  function($scope, $routeParams, User) {
    $scope.user = User.get({userId: $routeParams.userId}, function(user) {
    //$scope.mainImageUrl = user.imageUrl;
  });

  /*
  $scope.setImage = function(imageUrl) {
    $scope.mainImageUrl = imageUrl;
  }
  */
}]);


