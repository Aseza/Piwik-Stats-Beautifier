var myApp = angular.module('myApp', []);
myApp.controller('controller', function($scope, $http, $filter, $timeout) {
      $http.get("php/info.php")
      .then(function(response) {
          $scope.myWelcome = response.data;
      });
  });
