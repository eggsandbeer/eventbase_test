var details_controllers = angular.module('marvelCharacters.details.controllers', []);

details_controllers.controller('detailsController', function($scope, $routeParams, marvelCharactersDetailsAPI) {
  $scope.loading = true;
  $scope.character = null;
  $scope.selected = '';

  $scope.select= function(name) {
    $scope.selected = name;
  };

  marvelCharactersDetailsAPI.getDetails($routeParams.id).then(function(response){
    $scope.loading = false;
    $scope.character = response;
    if(response.comics.items[0].name){
      $scope.selected = response.comics.items[0].name;
    }
  }, function(error) {
    console.log(error);
    // better error handling needed here.
  });
});
