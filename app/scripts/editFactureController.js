

angular.module('scrapApp').controller('editFactureController', ['$mdDialog', 'facture', '$http', '$scope', function ($mdDialog, facture, $http, $scope) {
  'use strict';

  this.cancel = $mdDialog.cancel;
  

  $scope.facture = facture;


  this.editItem = function () {
    $scope.facture.form.$setSubmitted();
    
    if($scope.facture.form.$valid) {
    
console.log('aaa')

        $http({
          url: 'http://www.scrapbookartetpassion.com/scrapapp/editFacture.php', 
          method: "GET",
          params: {id: $scope.facture.id, recu: $scope.facture.recu, balance: ($scope.facture.total - $scope.facture.recu)}
        }).then(function successCallback(response) {
            console.log(response)
            $mdDialog.hide();
        }, function errorCallback(response) {
            console.log(response)
        });
    }
  };
  
}]);