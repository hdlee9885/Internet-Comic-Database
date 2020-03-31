describe('About Page', () => {
	it('should nav to the about page', function() {
		browser.get('http:\\localhost:4200');
		navigateToAboutPage();
	});
	
	function navigateToAboutPage(){
	  	actualUrl = 'http://localhost:4200/about';
	    element(by.id('about-nav')).click().then(function(){ // first find list-home a tag and than click 
	        browser.sleep(2000).then(function(){
	          browser.getCurrentUrl().then(function(actualUrl){ // promise
	            expect(actualUrl.indexOf('about') !== -1).toBeTruthy(); // check the current url is list
	          });
	        });

	    });
	  }
});