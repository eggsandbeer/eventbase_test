var list_factory  = angular.module('marvelCharacters.list.factory', []);

list_factory.factory('marvelCharactersListAPI', function($http, $q){
  var API = {};

  var parseData = function(data){
    for (var i = 0, l = data.length; i < l; i++){
      var character_obj = data[i];

      if (character_obj.thumbnail === null){
        character_obj.thumbnail = {};
        character_obj.thumbnail.path = "/assets/images/animal"
        character_obj.thumbnail.extension = "jpg"
      }
      if (character_obj.description === ''){
        character_obj.description = 'Description missing'
      }
    }
    return data;
  }

  API.getGenericList = function(){
    var url = 'http://gateway.marvel.com:80/v1/public/characters?apikey=';

    return $http.get(url+=window.MARVEL_KEY)
      .then(function(response) {
        if (typeof response.data === 'object') {
          // Parse data before returning to controller
          var data = parseData(response.data.data.results)
          return data;
        } else {
          // invalid response
          return $q.reject(response.data);
        }
      }, function(response) {
        return $q.reject(response.data);
      });
  }

  API.getSearchList = function(query){
    var url = 'http://gateway.marvel.com:80/v1/public/characters?nameStartsWith=';

    return $http.get(url+=query+'&apikey='+window.MARVEL_KEY)
      .then(function(response) {
        if (typeof response.data === 'object') {
          var data = parseData(response.data.data.results)
          return data;
        } else {
          // invalid response
          return $q.reject(response.data);
        }
      }, function(response) {
        return $q.reject(response.data);
      });
  }
  
  return API;
});
