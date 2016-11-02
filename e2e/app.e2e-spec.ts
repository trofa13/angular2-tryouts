import { browser, element, by } from 'protractor';

describe('QuickStart E2E Tests', function () {

  let expectedMsg = 'Angular Modules';


  beforeEach(function () {
    browser.get('');
  });

  it('should display: ' + expectedMsg, function () {
    expect(element(by.css('h1')).getText()).toMatch(new RegExp(expectedMsg, 'i'));
  });

});
