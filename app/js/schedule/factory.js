var overview_factory  = angular.module('schedule.factory', []);

overview_factory.factory('scheduleFactoryAPI', function($http, $q){
  var API = {};

  var parseData = function(data){
    return data;
  }

  API.getOverview = function(date, chunk_id){
    return $http
      .get('http://webservice.eventbase.com/v1/web/schedule/index', {
        params: {
          'api': 'b08d0dd433294a2d3d2ddb22d35ba667',
          'app': 'frontendwebtestproduct',
          'date': date,
          'chunk': chunk_id
        }
      })
      .then(function(response) {
        if (typeof response.data === 'object') {
          // Parse data before returning to controller
          var data = parseData(response)
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
