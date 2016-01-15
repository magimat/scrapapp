
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
          url: apiBaseUrl + 'getUserOrders.php', 
          method: "GET",
          params: {poid: $scope.selectedpo, user: $scope.user}
        }).then(function successCallback(response) {
            $scope.orders = response.data;
            $scope.updateTotal($scope.order);
        }, function errorCallback(response) {
            console.log('error!!!');
        });
  }
  
  




  $scope.updateTotal = function(orders) {
    var total = 0;
    angular.forEach(orders, function(order) {
      total = total + parseFloat(order.total);
    });
    $scope.total = total;
    return orders;
  }






  
getListePO();

  


}]);