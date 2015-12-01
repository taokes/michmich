'use strict';

describe('Controller: ProjectCtrl', function () {

  // load the controller's module
  beforeEach(module('michmichApp'));
  beforeEach(module('socketMock'));

  var ProjectCtrl,
      scope,
      $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$httpBackend_, $controller, $rootScope) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('/api/projects')
      .respond(['HTML5 Boilerplate', 'AngularJS', 'Karma', 'Express']);

    scope = $rootScope.$new();
    ProjectCtrl = $controller('ProjectCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of projects to the scope', function () {
    $httpBackend.flush();
    expect(scope.awesomeProjects.length).toBe(4);
  });
});
