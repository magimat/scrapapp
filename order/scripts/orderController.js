

angular.module('scrapApp').controller('orderController', ['$location', '$mdDialog', '$http', '$scope', function ($location, $mdDialog, $http, $scope) {
  'use strict';

  this.cancel = $mdDialog.cancel;
  
  $scope.username = $location.search().username
  $scope.id = $location.search().id

  $scope.nbItems = 0;


  this.orderItem = function () {
     
        $http({
          url: 'http://www.scrapbookartetpassion.com/forum/admin/store/addItem.php', 
          method: "GET",
          params: {nom: $scope.item.nom, actif: $scope.item.actif, prix: $scope.item.prix, compagnie: $scope.item.compagnie}
        }).then(function successCallback(response) {
            console.log(response)
            $mdDialog.hide();
        }, function errorCallback(response) {
            console.log(response)
        });
  }
  
  
}]);