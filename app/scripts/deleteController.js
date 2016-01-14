

angular.module('scrapApp').controller('deleteController', ['$mdDialog', 'items', '$scope', '$http', function ($mdDialog, items, $scope, $http) {
  'use strict';
  
  this.cancel = $mdDialog.cancel;
  

  function deleteItem(item) {

    $http({
          url: 'http://www.scrapbookartetpassion.com/scrapapp/deleteItem.php', 
          method: "GET",
          params: {id: item.id}
        }).then(function successCallback(response) {
            console.log(response)
        }, function errorCallback(response) {
            console.log(response)
        });

  }


  this.deleteItems = function () {
    items.forEach(deleteItem)
    $mdDialog.hide();
  }
  
  
}]);