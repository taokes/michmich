'use strict';

angular.module('michmichApp')

.directive("productGallery", function() {
    return {
      restrict: "E",
      templateUrl: "gallery/gallery.html",
      controller: function() {
            this.current = 0;
            this.setCurrent = function(imageNumber){
        this.current = imageNumber || 0;
        };
    
      },
      controllerAs: "gallery"
    };
  })
  
.controller("ReviewController", function(){

    this.review = {};

    this.addReview = function(product){
       this.review.createdOn  = Date.now();
      product.reviews.push(this.review);
      this.review = {};
    };
  })
  
.directive("productDescriptions", function() {
    return {
      restrict: 'E',
      templateUrl: "product-description.html"
    };
  })

.directive("productReviews", function() {
    return {
      restrict: 'E',
      templateUrl: "product-reviews.html"
    };
  })
  .directive("productSpecs", function() {
    return {
      restrict:"A",
      templateUrl: "product-specs.html"
    };
  })
  
  .directive("productTabs", function() {
    return {
      restrict: "E",
      templateUrl: "product-tabs.html",
      controller: function() {
        this.tab = 1;

        this.isSet = function(checkTab) {
          return this.tab === checkTab;
        };

        this.setTab = function(activeTab) {
          this.tab = activeTab;
        };
      },
      controllerAs: "tab"
    };
  })
  
  
.controller('TabController', function(){
    this.tab = 1;

    this.setTab = function(newValue){
      this.tab = newValue;
    };

    this.isSet = function(tabName){
      return this.tab === tabName;
    };
  })

.controller('GalleryController', function(){
    this.current = 0;
    this.setCurrent = function(newGallery){
      this.current = newGallery || 0;
    };
  })

  .controller('ShopCtrl', function ($scope, $http, socket, Auth) {
  	 this.products = gems;
		    $scope.awesomeShops = [];

		    $http.get('/api/shops').success(function(awesomeShops) {
		      $scope.awesomeShops = awesomeShops;
		      socket.syncUpdates('shop', $scope.awesomeShops);
		    });

		    $scope.addShop = function() {
		      if($scope.name === '') {
		        return;
		      }
		      
		      $http.post('/api/shops', { userId : Auth.getCurrentUser().name , name: $scope.name , info: $scope.info});
		      $scope.newShop = '';
		    };

		    $scope.deleteShop = function(shop) {
		      $http.delete('/api/shops/' + shop._id);
		    };

		    $scope.$on('$destroy', function () {
		      socket.unsyncUpdates('shop');
 			});
	
 var gems = [{
    name: 'Azurite',
    description: "Some gems have hidden qualities beyond their luster, beyond their shine... Azurite is one of those gems.",
    shine: 8,
    price: 110.50,
    rarity: 7,
    color: '#CCC',
    faces: 14,
    images: [
      "images/gem-02.gif",
      "images/gem-05.gif",
      "images/gem-09.gif"
    ]
  }, {
    name: 'Bloodstone',
    description: "Origin of the Bloodstone is unknown, hence its low value. It has a very high shine and 12 sides, however.",
    shine: 9,
    price: 22.90,
    rarity: 6,
    color: '#EEE',
    faces: 12,
    images: [
      "images/gem-01.gif",
      "images/gem-03.gif",
      "images/gem-04.gif"
    ]
  }, {
    name: 'Zircon',
    description: "Zircon is our most coveted and sought after gem. You will pay much to be the proud owner of this gorgeous and high shine gem.",
    shine: 70,
    price: 1100,
    rarity: 2,
    color: '#000',
    faces: 6,
    images: [
      "images/gem-06.gif",
      "images/gem-07.gif",
      "images/gem-10.gif"
    ]
  }];	    
});


