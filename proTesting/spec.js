// spec.js
describe('Protractor Demo App', function() {
    it('should add one and two', function() {
      browser.get('http:\\localhost:4200');
      
      console.log(browser.getTitle());
      expect(browser.getTitle()).toEqual("icdb");
          
    });
  });