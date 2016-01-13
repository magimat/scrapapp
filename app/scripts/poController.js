
angular.module('scrapApp').controller('poController', ['$window', '$resource','$mdDialog', '$scope', function ($window, $resource,$mdDialog, $scope) {
  'use strict';
  
  $scope.filter = [];
  $scope.filter.show = false;

  $scope.query = [];
  $scope.query.filter = '';

  $scope.total = 0;


  function getOrders(query) {
    $scope.orders = $resource('http://www.scrapbookartetpassion.com/forum/admin/store/orders.php').query();
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


  
  
getOrders();
$scope.updateTotal($scope.order);
  


}]);