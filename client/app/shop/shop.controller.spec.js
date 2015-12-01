'use strict';

describe('Controller: ShopCtrl', function () {

  // load the controller's module
  beforeEach(module('michmichApp'));
  beforeEach(module('socketMock'));

  var ShopCtrl,
      scope,
      $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$httpBackend_, $controller, $rootScope) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('/api/shops')
      .respond(['HTML5 Boilerplate', 'AngularJS', 'Karma', 'Express']);

    scope = $rootScope.$new();
    ShopCtrl = $controller('ShopCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of shops to the scope', function () {
    $httpBackend.flush();
    expect(scope.awesomeShops.length).toBe(4);
  });
});
