var overview_controllers = angular.module('schedule.controllers', []);

overview_controllers.controller('mainScheduleController', function($location, $scope, $filter, $routeParams, scheduleFactoryAPI) {
  $scope.chunk = null;
  $scope.date = null;
  $scope.loading = true;
  $scope.event = '';

  $scope.submit = function(){
    scheduleFactoryAPI.getOverview($scope.date, $scope.chunk).then(function(response){

      // should be a loop. not done.
      $scope.event = response.data.events[0];

    }, function(error) {
      console.log(error);
      // better error handling needed here.
    });
  }
});
