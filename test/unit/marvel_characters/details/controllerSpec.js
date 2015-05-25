'use strict';
describe('Marvel Characters Module', function(){

  beforeEach(module('marvelCharacters'));

  describe('Details Controllers', function(){

    beforeEach(module('marvelCharacters.details.controllers'));

    describe('-- details controlle method', function(){

      var url = 'http://gateway.marvel.com:80/v1/public/characters/1009718?apikey=undefined';

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
                "name": "Wolverine",
                "comics": {
                  "items": [
                    {
                      "name": "5 Ronin (Hardcover)"
                    },
                    {
                      "name": "Alpha Flight (1983) #17"
                    }
                  ]
                }
              }
            ]
          }
        }
        requestHandler = $httpBackend.when('GET', url).respond(data_stub);

        detailsController = function() {
          return $controller('detailsController', {
            '$scope' : scope,
            '$routeParams': {
              'id': 1009718
            }
          });
        };
      }));

      afterEach(function() {
       $httpBackend.verifyNoOutstandingExpectation();
       $httpBackend.verifyNoOutstandingRequest();
      });

      it('should be defined', function(){
        var controller = detailsController();
        expect(controller).toBeDefined();
        $httpBackend.flush();
      });

      it('should return the character details response on load', function(){
        var controller = detailsController();
        $httpBackend.expect('GET', url).respond(data_stub);
        $httpBackend.flush();
        expect(scope.character.name).toBe('Wolverine');
      });

      it('should define the active comic scope', function(){
        var controller = detailsController();
        $httpBackend.flush();
        scope.select(1)
        expect(scope.selected).toBe('Alpha Flight (1983) #17');
      });

      it('should change the comic lists active scope', function(){
        var controller = detailsController();
        $httpBackend.flush();
        scope.edit('Something else')
        expect(scope.selected).toBe('Something else');
      });

      it('should delete comics from the list scope', function(){
        var controller = detailsController();
        $httpBackend.flush();
        scope.delete(0 , '5 Ronin (Hardcover)');

        expect(scope.selected).toBe('Alpha Flight (1983) #17');
        expect(scope.character.comics.items.length).toBe(1);
      });
    });
  });
});
