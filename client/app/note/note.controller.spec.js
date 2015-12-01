'use strict';

describe('Controller: NoteCtrl', function () {

  // load the controller's module
  beforeEach(module('michmichApp'));
  beforeEach(module('socketMock'));

  var NoteCtrl,
      scope,
      $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$httpBackend_, $controller, $rootScope) {
   
    scope = $rootScope.$new();
    NoteCtrl = $controller('NoteCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of notes to the scope', function () {
    $httpBackend.flush();
    expect(scope.awesomeNotes.length).toBe(4);
  });
});
