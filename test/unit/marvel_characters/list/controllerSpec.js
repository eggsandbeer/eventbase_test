'use strict';
describe('marvelCharacters', function(){

  beforeEach(module('marvelCharacters'));

  describe('List Controllers', function(){

    beforeEach(module('marvelCharacters.list.controllers'));

    describe('the list controller', function(){

      var url = 'http://gateway.marvel.com:80/v1/public/characters?apikey=undefined';
      var search_url = 'http://gateway.marvel.com:80/v1/public/characters?nameStartsWith=Wolverine&apikey=undefined';

      var listController, $httpBackend, $rootScope, scope, $routeParams, requestHandler, data_stub, search_data_stub;

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
        search_data_stub = {
          "data": {
            "results": [
              {
                "name": "Wolverine"
              }
            ]
          }
        }
        requestHandler = $httpBackend.when('GET', url).respond(data_stub);

        listController = function() {
          return $controller('listController', {
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
        expect(listController).toBeDefined();
      });

      it('should return a list of characters on load', function () {
        var controller = listController();
        $httpBackend.expect('GET', url).respond(data_stub);
        $httpBackend.flush();
        expect(scope.characterList.length).toBe(3);
        expect(scope.characterList[0].name).toBe('Wolverine')
      });

      it('should return search results when required', function(){
        var controller = listController();
        scope.searchTerm = 'Wolverine';
        scope.submitSearch();
        $httpBackend.expect('GET', search_url).respond(search_data_stub);
        $httpBackend.flush();
        expect(scope.characterList.length).toBe(1);
      });
    });
  });
});
