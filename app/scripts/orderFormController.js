


angular.module('scrapApp').controller('orderFormController', ['apiBaseUrl', '$window', '$location', '$mdDialog', '$http', '$scope', function (apiBaseUrl, $window, $location, $mdDialog, $http, $scope) {
  'use strict';

  this.cancel = $mdDialog.cancel;
  
  $scope.username = $location.search().username
  $scope.idItem = $location.search().id

  $scope.nbItems = 1;




  $http({
          url: apiBaseUrl + 'getItem.php', 
          method: "GET",
          params: {id: $scope.idItem}
        }).then(function successCallback(response) {
            $scope.item = response.data;
            if($scope.item.actif == 'non disponible') {
                 $window.location.href = '#/orderFormFail';
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
            $window.location.href = '#/orderFormFail';
        });



  $scope.orderItem = function () {
     
        $http({
          url: apiBaseUrl + 'orderItem.php', 
          method: "GET",
          params: {id: $scope.idItem, prix: $scope.item.prix, username: $scope.username, quantite: $scope.nbItems, poid: $scope.curpo.id}
        }).then(function successCallback(response) {

          console.log('ok')
           $window.location.href = '#/orderFormSuccess';
        }, function errorCallback(response) {
            $window.location.href = '#/orderFormFail';
        });

  }
  
  
}]);