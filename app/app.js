angular.module('scrapApp', ['md.data.table', 'ngMaterial', 'ngResource', 'ngRoute'])

  .config(['$compileProvider', '$mdThemingProvider', '$routeProvider', function ($compileProvider, $mdThemingProvider, $routeProvider) {
    'use strict';
    
    $compileProvider.debugInfoEnabled(false);
    
    $mdThemingProvider.theme('default')
      .primaryPalette('blue')
      .accentPalette('pink');

 	$routeProvider.
      when('/gestion', {
        templateUrl: 'views/gestionpo.html',
        controller: 'scrapController'
      }).
      when('/order', {
        templateUrl: 'views/placeorder.html',
        controller: 'orderController'
      }).
      otherwise({
        redirectTo: '/gestion'
      });



  }]);