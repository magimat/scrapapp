angular.module('scrapApp', ['ngMaterial'])

  .config(['$compileProvider', '$mdThemingProvider', '$locationProvider', function ($compileProvider, $mdThemingProvider, $locationProvider) {
    'use strict';
    $locationProvider.html5Mode(true);
    $compileProvider.debugInfoEnabled(false);
    
    $mdThemingProvider.theme('default')
      .primaryPalette('blue')
      .accentPalette('pink');
  }]);