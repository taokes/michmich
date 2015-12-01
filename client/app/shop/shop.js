'use strict';

angular.module('michmichApp')
  .config(function ($stateProvider) {
      $stateProvider
      .state('shop', {
        url: '/shop',
        templateUrl: 'app/shop/shop.html',
        controller: 'ShopCtrl'
      });
  });
  

