var usersCRUDApp = angular.module('usersCRUDApp', []);

usersCRUDApp.controller('UsersCRUDCtrl', function ($scope) {
  $scope.users = [
    {'first_name': 'George',
     'last_name': 'Cluny',
     'email_address': 'george.cluny@gmail.com',
     'age': 56},
    {'first_name': 'Jimmy',
     'last_name': 'Fallon',
     'email_address': 'jimmy.fallon@yahoo.com',
     'age': 35},
    {'first_name': 'Garack',
     'last_name': 'Obama',
     'email_address': 'barack.obama@whitehouse.com',
     'age': 50}
  ];

  $scope.temp = "World";

  $scope.orderProp = 'last_name';

});
