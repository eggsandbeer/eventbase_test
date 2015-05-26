var overview_controllers = angular.module('overview.controllers', []);

overview_controllers.controller('mainOverviewController', function($location, $scope, $filter, $routeParams, overviewFactoryAPI) {
  $scope.loading = true;
  $scope.dates = [];

  overviewFactoryAPI.getOverview().then(function(response){
    $scope.loading = false;
    $scope.dates = response.data.dates;
  }, function(error) {
    console.log(error);
    // better error handling needed here.
  });

});
