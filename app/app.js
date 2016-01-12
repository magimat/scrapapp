angular.module('scrapApp', ['md.data.table', 'ngMaterial', 'ngResource', 'ngRoute'])

  .config(['$compileProvider', '$mdThemingProvider', '$routeProvider', function ($compileProvider, $mdThemingProvider, $routeProvider) {
    'use strict';
    
    $compileProvider.debugInfoEnabled(false);
    
    $mdThemingProvider.theme('default')
      .primaryPalette('blue')
      .accentPalette('pink');

 	$routeProvider.
      when('/viewpo', {
        templateUrl: 'views/viewpo.html',
        controller: 'poController'
      }).
      when('/gestion', {
        templateUrl: 'views/gestion_items.html',
        controller: 'scrapController'
      }).
      when('/order', {
        templateUrl: 'views/order.html',
        controller: 'orderController'
      }).
      when('/ordersuccess', {
        templateUrl: 'views/ordersuccess.html',
        controller: 'orderController'
      }).
      when('/orderfail', {
        templateUrl: 'views/orderfail.html',
        controller: 'orderController'
      }).
      otherwise({
        redirectTo: '/gestion'
      });



  }]);