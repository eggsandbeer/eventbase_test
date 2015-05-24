var details_factory  = angular.module('marvelCharacters.details.factory', []);

details_factory.factory('marvelCharactersDetailsAPI', function($http){
  var API = {};

  var parseData = function(data){
    if(data.thumbnail === null){
      data.thumbnail = {};
      data.thumbnail.path = "/assets/images/animal"
      data.thumbnail.extension = "jpg"
    }
    if (data.description === ''){
      data.description = 'No description available'
    }
    return data;
  }

  API.getDetails = function(character_id){
    return $http.get('http://gateway.marvel.com:80/v1/public/characters/'+character_id+'?apikey='+window.MARVEL_KEY)
      .then(function(response) {
        if (typeof response.data === 'object') {
          // Parse data before returning to controller
          var data = parseData(response.data.data.results[0])
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
