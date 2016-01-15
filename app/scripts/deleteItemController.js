

angular.module('scrapApp').controller('deleteItemController', ['apiBaseUrl', '$mdDialog', 'items', '$scope', '$http', function (apiBaseUrl, $mdDialog, items, $scope, $http) {
  'use strict';
  
  this.cancel = $mdDialog.cancel;
  

  function deleteItem(item) {

    $http({
          url: apiBaseUrl + 'deleteItem.php', 
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