'use strict';

/* https://github.com/angular/protractor/blob/master/docs/getting-started.md */

describe('The App', function() {

  browser.get('http://127.0.0.1:9000');

  it('should automatically redirect to /characters when location hash/fragment is empty', function() {
    expect(browser.getLocationAbsUrl()).toMatch("/characters");
  });

  describe('list view', function() {
    it('should render view1 when user navigates to /characters', function() {
      expect(element.all(by.css('h1')).getText()).
        toMatch('Characters');
    });

    it('shoudl render a big list of characters', function() {
      expect(element.all(by.css('h4 a')).first().getText()).
        toMatch('3-D Man');
    });

    it('should reverse the character order of the list when buttons are clicked', function() {
      element.all(by.css('.dropdown-toggle')).click();
      element.all(by.css('.dropdown-menu a')).first().click();
      // var filterCharacters = element(by.name('filterCharacters'));
      expect(element.all(by.css('h4 a')).first().getText()).
        toMatch('Ajaxis');
    });

    it('should search for wolverine', function() {
      var email = browser.findElement(protractor.By.model('searchTerm'));
      var submit = element.all(by.css('#searchCharactersSubmitButton'));

      email.sendKeys('wolverine');

      submit.click();

      expect(element.all(by.css('h4 a')).first().getText()).
        toMatch('Wolverine');
    });
  });

  describe('details view', function(){
    it('should render view1 when user navigates to /characters', function() {
      var link = element.all(by.css('h4 a')).first().click();
      expect(element.all(by.css('h1')).getText()).
        toMatch('Wolverine');
      // 1009718 is the marvel id for wolverine
      expect(browser.getLocationAbsUrl()).toMatch("/characters/1009718");
    });

    it('should delete the third item in the comics available list', function(){
      var text = element.all(by.css('.list-group li')).get(2).element(by.css('.text'));
      var del_button = element.all(by.css('.list-group li .delete-button')).get(2);

      expect(text.getText()).
        toEqual('5 Ronin (2010) #1');

      del_button.click();

      var text = element.all(by.css('.list-group li')).get(2).element(by.css('.text'));

      expect(text.getText()).
        toEqual('5 Ronin (2010) #1 (AJA Cover)');
    });

    it('should make the 5th comic list item active', function(){
      var active_button = element.all(by.css('.list-group li .active-button')).get(5);

      active_button.click();

      expect(element.all(by.css('h4')).getText()).
        toEqual(['Agents of Atlas (2009) #3 (Wolverine Art Appreciation Variant)']);
    });

    it('should change the title of the 5th item in the comic list, which is also active', function(){
      var edit_button = element.all(by.css('.list-group li .edit-button')).get(5);

      edit_button.click();

      var comic_name = element.all(by.css('.list-group li')).get(5).element(by.model('comic.name'));;

      comic_name.sendKeys('MORE');

      expect(element.all(by.css('h4')).getText()).
        toEqual(['Agents of Atlas (2009) #3 (Wolverine Art Appreciation Variant)MORE']);
    });
  });
});
