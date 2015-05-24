'use strict';

/* https://github.com/angular/protractor/blob/master/docs/getting-started.md */

describe('The App', function() {
  browser.get('http://127.0.0.1:9000');

  it('should automatically redirect to /characters when location hash/fragment is empty', function() {
    expect(browser.getLocationAbsUrl()).toMatch("/characters");
  });

});
