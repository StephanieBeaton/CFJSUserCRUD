'use strict';

/* App Module */

var usersCRUDApp = angular.module('usersCRUDApp', [
  'ngRoute',
  'userCRUDControllers',
  'userCRUDServices'
]);


usersCRUDApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/users', {
        templateUrl: 'partials/user-list.html',
        controller: 'UserListCtrl'
      }).
      when('/users/:userId', {
        templateUrl: 'partials/user-details.html',
        controller: 'UserDetailCtrl'
      }).
      otherwise({
        redirectTo: '/users'
      });
  }]);
