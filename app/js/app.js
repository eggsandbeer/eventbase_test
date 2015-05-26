angular.module('EventBaseApp', [
  'overview',
  'schedule',
  // 'details',
  'ngRoute'
]).
config(['$routeProvider', function($routeProvider) {
  'use strict';
  $routeProvider.otherwise({ redirectTo: '/overview' });
}]);
