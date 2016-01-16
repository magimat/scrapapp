
angular.module('scrapApp').controller('itemsController', ['$timeout', 'apiBaseUrl', '$window', '$resource','$mdDialog', '$scope', function ($timeout, apiBaseUrl, $window, $resource,$mdDialog, $scope) {
  'use strict';
  
  $scope.selected = [];
  $scope.selected.length = 0;
  $scope.filter = [];
  $scope.filter.show = false;

  $scope.query = [];
  $scope.query.filter = '';

  $scope.confirmCopy = '';

  function getItems(query) {
    $scope.items = $resource(apiBaseUrl + 'getItems.php').query();
    $scope.selected.length = 0;
  }

  function deleteConfirmMsg() {
    $scope.confirmCopy = '';
  }

  
  $scope.addItem = function (event) {
    $mdDialog.show({
      clickOutsideToClose: true,
      controller: 'addItemController',
      controllerAs: 'ctrl',
      focusOnOpen: false,
      targetEvent: event,
      templateUrl: 'dialogs/addItemDialog.html',
    }).then(getItems);
  };



  $scope.getTextToCopy = function() {

    $scope.confirmCopy = "L'url pour commander l'item sélectionné est prête à coller dans le forum!"
    $timeout(deleteConfirmMsg, 3000);
    return apiBaseUrl + '../forum/orderRedirect.php?id=' + $scope.selected[0].id
  }


  $scope.edit = function (event) {
    $mdDialog.show({
      clickOutsideToClose: true,
      controller: 'editItemController',
      controllerAs: 'ctrl',
      focusOnOpen: false,
      targetEvent: event,
      locals: { item: $scope.selected[0] },
      templateUrl: 'dialogs/editItemDialog.html',
    }).then(getItems);
  };

  
  $scope.delete = function (event) {
    $mdDialog.show({
      clickOutsideToClose: true,
      controller: 'deleteItemController',
      controllerAs: 'ctrl',
      focusOnOpen: false,
      targetEvent: event,
      locals: { items: $scope.selected },
      templateUrl: 'dialogs/deleteItemDialog.html',
    }).then(getItems);
  };
  
  $scope.removeFilter = function () {
    $scope.filter.show = false;
    $scope.query.filter = '';
    
    if($scope.filter.form.$dirty) {
      $scope.filter.form.$setPristine();
    }
  };

  $scope.gotoItems = function () {
    $window.location.href = '#/items';
  }

  $scope.gotoCommandes = function () {
    $window.location.href = '#/orders';
  }

  $scope.gotoEtatsCompte = function () {
    $window.location.href = '#/etatsCompte';
  }


  
getItems();


}]);