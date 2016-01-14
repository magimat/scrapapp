
angular.module('scrapApp').controller('scrapController', ['$window', '$resource','$mdDialog', '$scope', function ($window, $resource,$mdDialog, $scope) {
  'use strict';
  
  $scope.selected = [];
  $scope.selected.length = 0;
  $scope.filter = [];
  $scope.filter.show = false;

  $scope.query = [];
  $scope.query.filter = '';

  function getItems(query) {
    $scope.items = $resource('http://www.scrapbookartetpassion.com/scrapapp/items.php').query();
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



  $scope.getTextToCopy = function() {
    alert("L'url pour commander l'item sélectionné est prête à coller dans le forum!");
    return 'http://scrapbookartetpassion.com/scrapapp/app/#/order?id=' + $scope.selected[0].id
  }


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

    console.log(111);
    $scope.filter.show = false;
    $scope.query.filter = '';
    
    if($scope.filter.form.$dirty) {
      $scope.filter.form.$setPristine();
    }
  };

  $scope.gotoItems = function () {
    $window.location.href = '#/main';
  }

  $scope.gotoCommandes = function () {
    $window.location.href = '#/viewpo';
  }

  $scope.gotoEtatCompte = function () {
    $window.location.href = '#/etatcompte';
  }


  
getItems();


}]);