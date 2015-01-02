'use strict';

/* jasmine specs for controllers go here */
describe('UserCRUD controllers', function() {

  // Load our app module definition before each test.
  beforeEach(module('usersCRUDApp'));

  describe('UserListCtrl', function(){

    var scope, ctrl, $httpBackend;

    // The injector ignores leading and trailing underscores here (i.e. _$httpBackend_).
    // This allows us to inject a service but then attach it to a variable
    // with the same name as the service in order to avoid a name conflict.
    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('users/users.json').
          respond([{last_name: 'Cluny'}, {last_name: 'Obama'}]);

      scope = $rootScope.$new();
      ctrl = $controller('UserListCtrl', {$scope: scope});
    }));

    it('should create "users" model with 2 users fetched from xhr', function() {
      expect(scope.users).toBeUndefined();
      $httpBackend.flush();

      expect(scope.users).toEqual([{last_name: 'Cluny'},
                                   {last_name: 'Obama'}]);
    });


    it('should set the default value of orderProp model', function() {
      expect(scope.orderProp).toBe('age');
    });
  });


    it('should set the default value of orderProp model', function() {
      expect(scope.orderProp).toBe('last_name');
    });

    /*
    it('should create "users" model with 3 users', inject(function($controller) {
      var scope = {},
          ctrl = $controller('UsersCRUDCtrl', {$scope:scope});

      expect(scope.users.length).toBe(3);
    }));

    it('should create "temp" model with value World', inject(function($controller) {
     var scope = {},
          ctrl = $controller('UsersCRUDCtrl', {$scope:scope});

      expect(scope.temp).toBe('World');
    }));

    it('should set the default value of orderProp model', inject(function($controller) {
     var scope = {},
          ctrl = $controller('UsersCRUDCtrl', {$scope:scope});

      expect(scope.orderProp).toBe('last_name');
    }));

    */
  });


  describe('UserDetailCtrl', function(){
    var scope, $httpBackend, ctrl;

    beforeEach(inject(function(_$httpBackend_, $rootScope, $routeParams, $controller) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('users/0001.json').respond({last_name:'Cluny'});

      $routeParams.userId = '0001';
      scope = $rootScope.$new();
      ctrl = $controller('UserDetailCtrl', {$scope: scope});
    }));


    it('should fetch user detail', function() {
      expect(scope.user).toBeUndefined();
      $httpBackend.flush();

      expect(scope.user).toEqual({last_name:'Cluny'});
    });
  });

});
