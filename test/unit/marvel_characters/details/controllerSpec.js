'use strict';
/* jasmine specs for controllers go here */

describe('marvelCharacters', function(){
  describe('details controllers', function(){

    beforeEach(module('marvelCharacters'));
    beforeEach(module('marvelCharacters.details.controllers'));
    // beforeEach(module(' marvelCharactersDetailsAPI'));
    describe('detailsController', function(){
      it('should create some bullshit',
        inject(function($rootScope, $controller){
          var scope = $rootScope.$new();
          var ctrl = $controller("detailsController", {
            $scope: scope,
            $routeParams: {id: '...'}
          });
          expect(ctrl).toBeDefined();
        }));
    });
  });
});
