'use strict';

angular.module('michmichApp')
  .controller('NoteCtrl', function ($scope) {

 $scope.awesomeNotes = this.notes;

		var notes = [
		{
    name: 'Azurite',
    description: "Some gems have hidden qualities beyond their luster, beyond their shine... Azurite is one of those gems.",
    
  },
{
    name: 'Bloodstone',
    description: "Origin of the Bloodstone is unknown, hence its low value. It has a very high shine and 12 sides, however.",
   
  }, 
  {
    name: 'Zircon',
    description: "Zircon is our most coveted and sought after gem. You will pay much to be the proud owner of this gorgeous and high shine gem.",
    
  }
  ];	    
});
