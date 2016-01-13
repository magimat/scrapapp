
angular.module('scrapApp').controller('poController', ['$http', '$window', '$resource','$mdDialog', '$scope', function ($http, $window, $resource,$mdDialog, $scope) {
  'use strict';
  
  $scope.filter = [];
  $scope.filter.show = false;

  $scope.query = [];
  $scope.query.filter = '';

  $scope.total = 0;


  function getCurPO() {
    $http({
          url: 'http://www.scrapbookartetpassion.com/forum/admin/store/getCurrentPO.php', 
          method: "GET",
          params: {}
        }).then(function successCallback(response) {
            $scope.curpo = response.data;
            console.log($scope.curpo.id)
            getOrders();
        }, function errorCallback(response) {
            console.log('error!!!');
        });
  }

  function getOrders() {
    $http({
          url: 'http://www.scrapbookartetpassion.com/forum/admin/store/orders.php', 
          method: "GET",
          params: {poid: $scope.curpo.id}
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
          url: 'http://www.scrapbookartetpassion.com/forum/admin/store/closepo.php', 
          method: "GET",
          params: {poid: $scope.curpo.id}
        }).then(function successCallback(response) {
            getCurPO();
        }, function errorCallback(response) {
            console.log('error!!!');
        });
  }

  
getCurPO();

  


}]);