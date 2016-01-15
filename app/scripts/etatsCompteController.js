
angular.module('scrapApp').controller('etatsCompteController', ['apiBaseUrl', '$http', '$window', '$resource','$mdDialog', '$scope', function (apiBaseUrl, $http, $window, $resource,$mdDialog, $scope) {
  'use strict';
  
  $scope.selected = [];
  $scope.selected.length = 0;
  
  $scope.filter = [];
  $scope.filter.show = false;

  $scope.query = [];
  $scope.query.filter = '';

  $scope.total = 0;




  function getListeEtatCompte() {
    $http({
          url: apiBaseUrl + 'getAllPo.php', 
          method: "GET",
          params: {}
        }).then(function successCallback(response) {
            $scope.allpo = response.data;
            $scope.curpoid = $scope.allpo[0].id;
            getEtatCompte()
        }, function errorCallback(response) {
            console.log('error!!!');
        });
  }
  

  function getEtatCompte() {
    $http({
          url: apiBaseUrl + 'getEtatCompte.php', 
          method: "GET",
          params: {poid: $scope.curpoid}
        }).then(function successCallback(response) {
            $scope.factures = response.data;
        }, function errorCallback(response) {
            console.log('error!!!');
        });
  }



  $scope.edit = function (event) {
    $mdDialog.show({
      clickOutsideToClose: true,
      controller: 'editFactureController',
      controllerAs: 'ctrl',
      focusOnOpen: false,
      targetEvent: event,
      locals: { facture: $scope.selected[0] },
      templateUrl: 'dialogs/editEtatCompteDialog.html',
    }).then(getEtatCompte);
  };
  
  $scope.removeFilter = function () {
    $scope.filter.show = false;
    $scope.query.filter = '';
    
    if($scope.filter.form.$dirty) {
      $scope.filter.form.$setPristine();
    }
  };




  $scope.updateTotal = function(orders) {
    var total = 0;
    angular.forEach(orders, function(order) {
      total = total + parseFloat(order.balance);
    });
    $scope.total = total;
    return orders;
  }


  $scope.changepo = function() {

    getEtatCompte();
  }

  
  $scope.gotoItems = function () {
    $window.location.href = '#/items';
  }

  $scope.gotoCommandes = function () {
    $window.location.href = '#/orders';
  }

  $scope.gotoEtatsCompte = function () {
    $window.location.href = '#/etatsCompte';
  }



getListeEtatCompte();

  


}]);