angular.module('PayByPhoneApp', [
  'marvelCharacters',
  'ngRoute'
]).
config(['$routeProvider', function($routeProvider) {
  'use strict';
  $routeProvider.otherwise({ redirectTo: '/characters' });
}])
