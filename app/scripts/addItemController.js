

angular.module('scrapApp').controller('addItemController', ['$mdDialog', '$http', '$scope', function ($mdDialog, $http, $scope) {
  'use strict';

  this.cancel = $mdDialog.cancel;
  
  $scope.item = {}
  $scope.item.actif = 'disponible';


  this.addItem = function () {
    $scope.item.form.$setSubmitted();
    
    if($scope.item.form.$valid) {
     
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
  };
  
}]);