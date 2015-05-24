var list_controllers = angular.module('marvelCharacters.list.controllers', []);

list_controllers.controller('listController', function($location, $scope, $routeParams, marvelCharactersListAPI) {
  $scope.nameFilter = null;
  $scope.searchTerm = null;
  $scope.loading = true;
  $scope.characterList = [];

  $scope.submitSearch = function(){
    $scope.loading = true;
    $location.url('/characters?search='+$scope.searchTerm);
    marvelCharactersListAPI.getSearchList($scope.searchTerm).then(function(response){
      $scope.loading = false;
      $scope.characterList = response;
    }, function(error) {
      console.log(error);
      // better error handling needed here.
    });
  }

  $scope.searchResultsFilter = function (character) {
    var result = new RegExp($scope.nameFilter, 'i');
    return !$scope.nameFilter || result.test(character.name)
  };

  // On Start-Up
  if(!$routeParams.search){
    marvelCharactersListAPI.getGenericList().then(function(response){
      $scope.loading = false;
      $scope.characterList = response;
    }, function(error) {
      console.log(error);
      // better error handling needed here.
    });
  } else {
    marvelCharactersListAPI.getSearchList($routeParams.search).then(function(response){
      $scope.loading = false;
      $scope.characterList = response;
    }, function(error) {
      console.log(error);
      // better error handling needed here.
    });
  }
});
