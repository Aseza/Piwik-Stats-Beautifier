
var myApp = angular.module('myApp', []);
myApp.controller('controller', function($scope, $http, $filter, $timeout) {
  $scope.isChrome = true;
  $scope.isSafari = true;
  $scope.isFirefox = true;
  $scope.isIe = true;
  $scope.isOthers = true;
  angular.element('.datepicker').datepicker({
    format: 'yyyy-mm-dd',
    autoclose: true,
  });
  $scope.dateChanged = function() {
    angular.element('#to').datepicker('setStartDate', $scope.dateFrom);
  }
  $scope.changed = function() {
    if ($scope.isDateChecked) {
      $('#fromDiv').slideDown(400);
      $('#toDiv').slideDown(400);
    }
    if (!$scope.isDateChecked) {
      $('#fromDiv').slideUp(400);
      $('#toDiv').slideUp(400);
    }
  }
  $scope.osChanged = function() {
    if ($scope.isOs)
      $('#osDiv').slideDown(400);
    if (!$scope.isOs)
      $('#osDiv').slideUp(400);

  }
  $scope.paysChanged = function() {
    if ($scope.isPays)
      $('#paysDiv').slideDown(400);
    if (!$scope.isPays)
      $('#paysDiv').slideUp(400);
  }
});
