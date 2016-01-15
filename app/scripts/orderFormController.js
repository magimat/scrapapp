


angular.module('scrapApp').controller('orderFormController', ['apiBaseUrl', '$window', '$location', '$mdDialog', '$http', '$scope', function (apiBaseUrl, $window, $location, $mdDialog, $http, $scope) {
  'use strict';

  this.cancel = $mdDialog.cancel;
  
  $scope.username = $location.search().username
  $scope.id = $location.search().id

  $scope.nbItems = 1;


  $http({
          url: apiBaseUrl + 'getItem.php', 
          method: "GET",
          params: {id: $scope.id}
        }).then(function successCallback(response) {
            $scope.item = response.data;

            if($scope.item.actif == 'non disponible') {
                 $window.location.href = '#/orderfail';
            }

        }, function errorCallback(response) {
            console.log(response)
        });


  $http({
          url: apiBaseUrl + 'getCurrentPO.php', 
          method: "GET",
          params: {}
        }).then(function successCallback(response) {
            $scope.curpo = response.data;
            console.log($scope.curpo)
        }, function errorCallback(response) {
            $window.location.href = '#/orderfail';
        });



  $scope.orderItem = function () {
     
        $http({
          url: apiBaseUrl + 'orderItem.php', 
          method: "GET",
          params: {id: $scope.id, prix: $scope.item.prix, username: $scope.username, quantite: $scope.nbItems, poid: $scope.curpo.id}
        }).then(function successCallback(response) {

          console.log('ok')
           $window.location.href = '#/ordersuccess';
        }, function errorCallback(response) {
            $window.location.href = '#/orderfail';
        });

  }
  
  
}]);