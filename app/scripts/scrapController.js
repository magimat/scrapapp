
angular.module('scrapApp').controller('scrapController', ['$resource','$mdDialog', '$scope', function ($resource,$mdDialog, $scope) {
  'use strict';
  
  $scope.selected = [];
  $scope.selected.length = 0;

  function getItems(query) {
    $scope.items = $resource('http://www.scrapbookartetpassion.com/forum/admin/store/items.php').query();
  }
  
  $scope.addItem = function (event) {
    $mdDialog.show({
      clickOutsideToClose: true,
      controller: 'addItemController',
      controllerAs: 'ctrl',
      focusOnOpen: false,
      targetEvent: event,
      templateUrl: 'templates/add-dialog.html',
    }).then(getItems);
  };
  
  $scope.delete = function (event) {
    $mdDialog.show({
      clickOutsideToClose: true,
      controller: 'deleteController',
      controllerAs: 'ctrl',
      focusOnOpen: false,
      targetEvent: event,
      locals: { items: $scope.selected },
      templateUrl: 'templates/delete-dialog.html',
    }).then(getItems);
  };
  
  $scope.removeFilter = function () {
    $scope.filter.show = false;
    $scope.query.filter = '';
    
    if($scope.filter.form.$dirty) {
      $scope.filter.form.$setPristine();
    }
  };

  $scope.onDeselect = function () {
    $scope.selected.length--;
  };
  
  $scope.onSelect = function () {
    $scope.selected.length++;
  };
  
  
getItems();
  


}]);