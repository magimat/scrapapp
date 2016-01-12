

angular.module('scrapApp').controller('orderController', ['$window', '$location', '$mdDialog', '$http', '$scope', function ($window, $location, $mdDialog, $http, $scope) {
  'use strict';

  this.cancel = $mdDialog.cancel;
  
  $scope.username = $location.search().username
  $scope.id = $location.search().id

  $scope.nbItems = 1;


  $http({
          url: 'http://www.scrapbookartetpassion.com/forum/admin/store/getItem.php', 
          method: "GET",
          params: {id: $scope.id}
        }).then(function successCallback(response) {
            $scope.item = response.data;

            if($scope.item.actif == 'non disponible') {
                 $window.location.href = '/forum/admin/store/app/#/orderfail';
            }

        }, function errorCallback(response) {
            console.log(response)
        });


  $http({
          url: 'http://www.scrapbookartetpassion.com/forum/admin/store/getCurrentPO.php', 
          method: "GET",
          params: {}
        }).then(function successCallback(response) {
            $scope.curpo = response.data;
            console.log($scope.curpo)
        }, function errorCallback(response) {
            $window.location.href = '/forum/admin/store/app/#/orderfail';
        });



  $scope.orderItem = function () {
     
        $http({
          url: 'http://www.scrapbookartetpassion.com/forum/admin/store/orderItem.php', 
          method: "GET",
          params: {id: $scope.id, username: $scope.username, quantite: $scope.nbItems, poid: $scope.curpo.id}
        }).then(function successCallback(response) {
           $window.location.href = '/forum/admin/store/app/#/ordersuccess';
        }, function errorCallback(response) {
            $window.location.href = '/forum/admin/store/app/#/orderfail';
        });

  }
  
  
}]);