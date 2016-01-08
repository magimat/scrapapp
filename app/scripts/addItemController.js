

angular.module('scrapApp').controller('addItemController', ['$mdDialog', '$http', '$scope', function ($mdDialog, $http, $scope) {
  'use strict';

  this.cancel = $mdDialog.cancel;
  
  function success(dessert) {
    $mdDialog.hide(dessert);
  }
  
  this.addItem = function () {
    $scope.item.form.$setSubmitted();
    
    if($scope.item.form.$valid) {
     
        $http({
          url: 'http://magimat.ca/forum/admin/store/addItem.php', 
          method: "GET",
          params: {nom: $scope.item.nom, quantite: $scope.item.quantite, prix: $scope.item.prix, compagnie: $scope.item.compagnie}
        }).then(function successCallback(response) {
            console.log(response)
            $mdDialog.hide();
        }, function errorCallback(response) {
            console.log(response)
        });
    }
  };
  
}]);