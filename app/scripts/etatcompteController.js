
angular.module('scrapApp').controller('etatcompteController', ['$http', '$window', '$resource','$mdDialog', '$scope', function ($http, $window, $resource,$mdDialog, $scope) {
  'use strict';
  
  $scope.filter = [];
  $scope.filter.show = false;

  $scope.query = [];
  $scope.query.filter = '';

  $scope.total = 0;



  function getListeEtatCompte() {
    $http({
          url: 'http://www.scrapbookartetpassion.com/forum/admin/store/getAllPo.php', 
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
          url: 'http://www.scrapbookartetpassion.com/forum/admin/store/getEtatCompte.php', 
          method: "GET",
          params: {poid: $scope.curpoid}
        }).then(function successCallback(response) {
            $scope.factures = response.data;
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
      total = total + parseFloat(order.balance);
    });
    $scope.total = total;
    return orders;
  }


  $scope.changepo = function() {
  

    getEtatCompte();
  }

  
getListeEtatCompte();

  


}]);