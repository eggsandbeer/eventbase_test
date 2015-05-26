var overview = angular.module('overview', [
  // details
  'overview.controllers',
  'overview.factory',
  // misc
  'ngRoute'
]);

overview.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/overview', {
    controller: 'mainOverviewController',
    templateUrl: 'js/overview/partial.html'
  });
}]);
