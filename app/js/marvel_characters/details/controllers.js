var details_controllers = angular.module('marvelCharacters.details.controllers', []);

details_controllers.controller('detailsController', function($scope, $routeParams, marvelCharactersDetailsAPI) {
  $scope.loading = true;
  $scope.character = null;
  $scope.showEdit = false;
  $scope.selected = '';

  $scope.select = function(index) {
    $scope.selected = $scope.character.comics.items[index].name;
  };

  $scope.delete = function(index, name){
    $scope.character.comics.items.splice(index, 1);
    if(name === $scope.selected){
      $scope.select(0);
    }
  };

  $scope.edit = function(new_title){
    $scope.selected = new_title;
  };

  marvelCharactersDetailsAPI.getDetails($routeParams.id).then(function(response){
    $scope.loading = false;
    $scope.character = response;
    if(response.comics.items[0]){
      $scope.selected = response.comics.items[0].name;
    }
  }, function(error) {
    console.log(error);
    // better error handling needed here.
  });
});
