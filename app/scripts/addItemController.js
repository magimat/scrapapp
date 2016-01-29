

angular.module('scrapApp').controller('addItemController', ['apiBaseUrl', '$mdDialog', '$http', '$scope', function (apiBaseUrl, $mdDialog, $http, $scope) {
  'use strict';

  this.cancel = $mdDialog.cancel;
  
  $scope.item = {}
  $scope.item.actif = 'disponible';


  this.addItem = function () {
    $scope.item.form.$setSubmitted();
    
    if($scope.item.form.$valid) {
     
        $http({
          url: apiBaseUrl + 'addItem.php', 
          method: "GET",
          params: {nom: $scope.item.nom, actif: $scope.item.actif, prix: $scope.item.prix, compagnie: $scope.item.compagnie, recu: $scope.item.recu}
        }).then(function successCallback(response) {
            $mdDialog.hide();
        }, function errorCallback(response) {
            console.log(response)
        });
    }
  };
  
}]);