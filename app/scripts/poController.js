
angular.module('scrapApp').controller('poController', ['$resource','$mdDialog', '$scope', function ($resource,$mdDialog, $scope) {
  'use strict';
  
  $scope.selected = [];
  $scope.selected.length = 0;

  function getOrders(query) {
    $scope.orders = $resource('http://www.scrapbookartetpassion.com/forum/admin/store/orders.php').query();
    $scope.selected.length = 0;
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

  $scope.edit = function (event) {
    $mdDialog.show({
      clickOutsideToClose: true,
      controller: 'editItemController',
      controllerAs: 'ctrl',
      focusOnOpen: false,
      targetEvent: event,
      locals: { item: $scope.selected[0] },
      templateUrl: 'templates/edit-dialog.html',
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

  
getOrders();
  


}]);