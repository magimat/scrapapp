angular.module('scrapApp', ['ngClipboard', 'md.data.table', 'ngMaterial', 'ngResource', 'ngRoute'])

  .config(['ngClipProvider', '$compileProvider', '$mdThemingProvider', '$routeProvider', function (ngClipProvider, $compileProvider, $mdThemingProvider, $routeProvider) {
    'use strict';
    
    ngClipProvider.setPath("../node_modules/zeroclipboard/dist/ZeroClipboard.swf");

    $compileProvider.debugInfoEnabled(false);
    
    $mdThemingProvider.theme('default')
      .primaryPalette('blue')
      .accentPalette('pink');

  $routeProvider.
      when('/viewpo', {
        templateUrl: 'views/viewpo.html',
        controller: 'poController'
      }).
      when('/main', {
        templateUrl: 'views/main-view.html',
        controller: 'scrapController'
      }).
      when('/userorder', {
        templateUrl: 'views/userorder.html',
        controller: 'userorderController'
      }).
      when('/gestion', {
        templateUrl: 'views/gestion_items.html',
        controller: 'scrapController'
      }).
      when('/etatcompte', {
        templateUrl: 'views/etatcompte.html',
        controller: 'etatcompteController'
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
        redirectTo: '/main'
      });



  }]);