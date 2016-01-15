
angular.module('scrapApp').controller('ordersController', ['apiBaseUrl', '$http', '$window', '$resource','$mdDialog', '$scope', function (apiBaseUrl, $http, $window, $resource,$mdDialog, $scope) {
  'use strict';
  
  $scope.filter = [];
  $scope.filter.show = false;

  $scope.query = [];
  $scope.query.filter = '';

  $scope.total = 0;


function getListePO() {
    $http({
          url: apiBaseUrl + 'getAllPo.php', 
          method: "GET",
          params: {}
        }).then(function successCallback(response) {
            $scope.allpo = response.data;
            getCurPO()

        }, function errorCallback(response) {
            console.log('error!!!');
        });
}
  

  function getCurPO() {
    $http({
          url: apiBaseUrl + 'getCurrentPO.php', 
          method: "GET",
          params: {}
        }).then(function successCallback(response) {
            $scope.curpo = response.data;

            $scope.curpo.dt_fin = 'XXXX-XX-XX';
            $scope.allpo.push($scope.curpo);
            $scope.selectedpo = $scope.curpo.id;

            getOrders();
        }, function errorCallback(response) {
            console.log('error!!!');
        });
  }


  function genEtatCompte() {
    $http({
          url: apiBaseUrl + 'getEtatCompteData.php', 
          method: "GET",
          params: {poid: $scope.curpo.id}
        }).then(function successCallback(response) {
            var totaux = response.data;

            angular.forEach(totaux, function(total) {
              insertEtatCompte(total);
            });


            getCurPO();
        }, function errorCallback(response) {
            console.log('error!!!');
        });
  }

  function insertEtatCompte(total) {
    $http({
          url: apiBaseUrl + 'addEtatCompte.php', 
          method: "GET",
          params: {poid: $scope.curpo.id, username: total.username, total: total.total}
        }).then(function successCallback(response) {

        }, function errorCallback(response) {
            console.log('error!!!');
        });
  }

 




  function getOrders() {

    $http({
          url: apiBaseUrl + 'getOrders.php', 
          method: "GET",
          params: {poid: $scope.selectedpo}
        }).then(function successCallback(response) {
            $scope.orders = response.data;
            $scope.updateTotal($scope.order);
        }, function errorCallback(response) {
            console.log('error!!!');
        });
  }
  
  
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
      total = total + parseFloat(order.total);
    });
    $scope.total = total;
    return orders;
  }


  $scope.fermerPO = function() {
    $http({
          url: apiBaseUrl + 'closepo.php', 
          method: "GET",
          params: {poid: $scope.curpo.id}
        }).then(function successCallback(response) {
            genEtatCompte();
            $scope.gotoEtatCompte();
        }, function errorCallback(response) {
            console.log('error!!!');
        });
  }


 $scope.changepo = function() {
 
    getOrders();
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

  
getListePO();

  


}]);