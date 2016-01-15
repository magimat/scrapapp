

angular.module('scrapApp').controller('editItemController', ['apiBaseUrl', '$mdDialog', 'item', '$http', '$scope', function (apiBaseUrl, $mdDialog, item, $http, $scope) {
  'use strict';

  this.cancel = $mdDialog.cancel;
  

  $scope.item = item;


  this.editItem = function () {
    $scope.item.form.$setSubmitted();
    
    if($scope.item.form.$valid) {
     
        $http({
          url: apiBaseUrl + 'editItem.php', 
          method: "GET",
          params: {id: $scope.item.id, nom: $scope.item.nom, actif: $scope.item.actif, prix: $scope.item.prix, compagnie: $scope.item.compagnie}
        }).then(function successCallback(response) {
            console.log(response)
            $mdDialog.hide();
        }, function errorCallback(response) {
            console.log(response)
        });
    }
  };
  
}]);