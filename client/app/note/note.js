'use strict';

angular.module('michmichApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('note', {
        url: '/note',
        templateUrl: 'app/note/note.html',
        controller: 'NoteCtrl'
      });
  });
  
