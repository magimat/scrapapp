var app = angular.module('scrapApp', ['ngClipboard', 'md.data.table', 'ngMaterial', 'ngResource', 'ngRoute'])

  .config(['ngClipProvider', '$compileProvider', '$mdThemingProvider', '$routeProvider', function (ngClipProvider, $compileProvider, $mdThemingProvider, $routeProvider) {
    'use strict';
    
    ngClipProvider.setPath("../node_modules/zeroclipboard/dist/ZeroClipboard.swf");

    $compileProvider.debugInfoEnabled(false);
    
    $mdThemingProvider.theme('default')
      .primaryPalette('blue')
      .accentPalette('pink');

    $routeProvider.
        when('/items', {
          templateUrl: 'views/items.html',
          controller: 'itemsController'
        }).
        when('/orders', {
          templateUrl: 'views/orders.html',
          controller: 'ordersController'
        }).
        when('/etatsCompte', {
          templateUrl: 'views/etatsCompte.html',
          controller: 'etatsCompteController'
        }).
        when('/userOrders', {
          templateUrl: 'views/userOrders.html',
          controller: 'userOrdersController'
        }).
        when('/orderForm', {
          templateUrl: 'views/orderForm.html',
          controller: 'orderFormController'
        }).
        when('/orderFormSuccess', {
          templateUrl: 'views/orderFormSuccess.html',
          controller: 'orderFormController'
        }).
        when('/orderFormFail', {
          templateUrl: 'views/orderFormfail.html',
          controller: 'orderFormController'
        }).
        when('/oops', {
          templateUrl: 'views/oops.html',
          controller: 'oopsController'
        }).
        otherwise({
          redirectTo: '/oops'
        });

  }]);


app.constant('apiBaseUrl', 'http://www.scrapbookartetpassion.com/scrapapp/');
