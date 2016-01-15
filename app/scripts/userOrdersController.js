
angular.module('scrapApp').controller('userOrderController', ['apiBaseUrl', '$location', '$http', '$window', '$resource','$mdDialog', '$scope', function (apiBaseUrl, $location, $http, $window, $resource,$mdDialog, $scope) {
  'use strict';
  
  $scope.filter = [];
  $scope.filter.show = false;

  $scope.query = [];
  $scope.query.filter = '';

  $scope.total = 0;

  $scope.user = $location.search().user


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


  $scope.changepo = function() {
  

    getOrders();
  }





  function getOrders() {

    $http({
          url: apiBaseUrl + 'userorders.php', 
          method: "GET",
          params: {poid: $scope.selectedpo, user: $scope.user}
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

  $scope.gotoItems = function () {
    $window.location.href = '#/main';
  }

  $scope.gotoCommandes = function () {
    $window.location.href = '#/viewpo';
  }

  $scope.gotoEtatCompte = function () {
    $window.location.href = '#/etatcompte';
  }


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


  function genEtatCompte() {
    $http({
          url: apiBaseUrl + 'getFactureData.php', 
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
          url: apiBaseUrl + 'insertEtatCompte.php', 
          method: "GET",
          params: {poid: $scope.curpo.id, username: total.username, total: total.total}
        }).then(function successCallback(response) {

        }, function errorCallback(response) {
            console.log('error!!!');
        });
  }

  
getListePO();

  


}]);