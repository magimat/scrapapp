

angular.module('scrapApp').controller('editItemController', ['$mdDialog', '$http', '$scope', function ($mdDialog, $http, $scope) {
  'use strict';

  this.cancel = $mdDialog.cancel;
  

  this.editItem = function () {
    $scope.item.form.$setSubmitted();
    
    if($scope.item.form.$valid) {
     
        $http({
          url: 'http://www.scrapbookartetpassion.com/forum/admin/store/editItem.php', 
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