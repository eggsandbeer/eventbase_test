'use strict';
describe('marvelCharacters', function(){

  beforeEach(module('marvelCharacters'));

  describe('Details Controllers', function(){

    beforeEach(module('marvelCharacters.details.controllers'));

    describe('the details controller', function(){

      var url = 'http://gateway.marvel.com:80/v1/public/characters?apikey=undefined';

      var detailsController, $httpBackend, $rootScope, scope, $routeParams, requestHandler, data_stub;

      beforeEach(inject(function ($injector) {

        $httpBackend = $injector.get('$httpBackend');

        $rootScope = $injector.get('$rootScope');
        scope = $rootScope.$new();

        $routeParams = $injector.get('$routeParams')

        var $controller = $injector.get('$controller');

        data_stub = {
          "data": {
            "results": [
              {
                "name": "Wolverine"
              },
              {
                "name": "Gambit"
              },
              {
                "name": "Beast"
              }
            ]
          }
        }
        requestHandler = $httpBackend.when('GET', url).respond(data_stub);

        detailsController = function() {
          return $controller('detailsController', {
            '$scope' : scope,
            '$routeParams': {}
          });
        };
      }));

      afterEach(function() {
       $httpBackend.verifyNoOutstandingExpectation();
       $httpBackend.verifyNoOutstandingRequest();
      });

      it('should be defined', function(){
        expect(detailsController).toBeDefined();
      });

    });
  });
});
