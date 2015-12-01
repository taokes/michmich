'use strict';

angular.module('michmichApp')
  .controller('ProjectCtrl', function ($scope, $http, socket, Auth) {
		    $scope.awesomeProjects = [];

		    $http.get('/api/projects').success(function(awesomeProjects) {
		      $scope.awesomeProjects = awesomeProjects;
		      socket.syncUpdates('project', $scope.awesomeProjects);
		    });

		    $scope.addProject = function() {
		      if($scope.name === '') {
		        return;
		      }
		      
		      $http.post('/api/projects', { userId : Auth.getCurrentUser().name , name: $scope.name , info: $scope.info});
		      $scope.newProject = '';
		    };

		    $scope.deleteProject = function(project) {
		      $http.delete('/api/projects/' + project._id);
		    };

		    $scope.$on('$destroy', function () {
		      socket.unsyncUpdates('project');
		    });
});
