'use strict';

angular.module('michmichApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('project', {
        url: '/project',
        templateUrl: 'app/project/project.html',
        controller: 'ProjectCtrl'
      });
  });
  
