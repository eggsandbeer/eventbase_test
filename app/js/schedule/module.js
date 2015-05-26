var overview = angular.module('schedule', [
  'schedule.controllers',
  'schedule.factory',
  // misc
  'ngRoute'
]);

overview.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/schedule', {
    controller: 'mainScheduleController',
    templateUrl: 'js/schedule/partial.html'
  });
}]);
