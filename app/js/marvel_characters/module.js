var marvelCharacters = angular.module('marvelCharacters', [
  // details
  'marvelCharacters.details.controllers',
  'marvelCharacters.details.factory',
  // list
  'marvelCharacters.list.controllers',
  'marvelCharacters.list.factory',
  // misc
  'ngRoute'
]);

marvelCharacters.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/characters', {
    controller: 'listController',
    templateUrl: 'partials/marvel_characters/list/list.html'
  });
  $routeProvider.when('/characters?search=:id', {
    controller: 'detailsController',
    templateUrl: 'partials/marvel_characters/details/details.html'
  });
  $routeProvider.when('/characters/:id', {
    controller: 'detailsController',
    templateUrl: 'partials/marvel_characters/details/details.html'
  });
}]);
