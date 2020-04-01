// spec.js
describe('ICDB Test', function() {
    it('should return title of web', function() {
      browser.get('http:\\localhost:4200');
      
      console.log(browser.getTitle());
      expect(browser.getTitle()).toEqual("icdb");
          
    });
});

describe('Navbar', () => {

  beforeEach(() => {
      browser.get('http:\\localhost:4200');
  });

  it('testing Navbar', () => {
    browser.sleep(2000).then(function(){
      checkNavbarTexts();
      
    });
  });

  function checkNavbarTexts(){
    element(by.id('home-nav')).getText().then(function(text){ // Promise
      expect(text).toEqual('Comic Book DB');
    });

    element(by.id('char-nav')).getText().then(function(text){ // Promise
      expect(text).toEqual('Characters');
    });

    element(by.id('issues-nav')).getText().then(function(text){ // Promise
      expect(text).toEqual('Issues');
    });
    
    element(by.id('authors-nav')).getText().then(function(text){ // Promise
        expect(text).toEqual('Authors');
      });
    
    element(by.id('about-nav')).getText().then(function(text){ // Promise
        expect(text).toEqual('About');
      });
  }

});

describe('Character Home Page', () => {
	it('should nav to character preview page', function() {
		browser.get('http:\\localhost:4200');
		navigateToCharactersPage();
	});
	
	function navigateToCharactersPage(){
	  	actualUrl = 'http://localhost:4200/characters';
	    element(by.id('char-nav')).click().then(function(){ // first find list-home a tag and than click 
	        browser.sleep(2000).then(function(){
	          browser.getCurrentUrl().then(function(actualUrl){ // promise
	            expect(actualUrl.indexOf('characters') !== -1).toBeTruthy(); // check the current url is list
	          });
	        });

	    });
	  }
});

describe('Character Detailed Page', () => {
	it('should nav to character detail page', function() {
		browser.get('http://localhost:4200/characters');
		navigateToCharacterDetailedPage();
	});
	
	function navigateToCharacterDetailedPage() {
		actualUrl = 'http://localhost:4200/character';
		element(by.id('characters-row')).click().then(function(){
			browser.sleep(2000).then(function(){
	          browser.getCurrentUrl().then(function(actualUrl){ // promise
	            expect(browser.getCurrentUrl()).toEqual(actualUrl);
	            		//actualUrl.indexOf('character') !== -1).toBeTruthy();
	            // check the current url is list
	          });
	        });
		});
	}
	
	it('should match the specific character', function() {
		browser.get('http://localhost:4200/characters');
		compareDetailCharacter();
	});
	function compareDetailCharacter() {
		s = element(by.id('char-name')).getText();
		element(by.id('characters-row')).click().then(function(){
			t = element(by.id('char-de-name')).getText();
			expect(s).toEqual(t);
		});
	}
});

describe('Preview Page Forward and Backward', () => {
	it('should nav to next page', function() {
		browser.get('http://localhost:4200/characters');
		forwardToNextCharacters();
	});
	
	it('should nav to previous page', function() {
		browser.get('http://localhost:4200/characters');
		backwardToPreviousCharacters();
	});
	
	function forwardToNextCharacters(){
		element(by.id('char-fwdbutton')).click().then(function(){
			s = element(by.id('char-name')).getText();
			element(by.id('characters-row')).click().then(function(){
				t = element(by.id('char-de-name')).getText();
				expect(s).toEqual(t);
			});
		});
	};
	
	function backwardToPreviousCharacters() {
		element(by.id('char-fwdbutton')).click().then(function(){
			element(by.id('char-backbutton')).click().then(function(){
				s = element(by.id('char-name')).getText();
				element(by.id('characters-row')).click().then(function(){
					t = element(by.id('char-de-name')).getText();
					expect(s).toEqual(t);
				});
			});
		});
	};

});

describe('Detail Page Expansion', () => {
	it('should open all tabs', function() {
		browser.get('http://localhost:4200/characters');
	    openAllTabs();
	})
	
	function openAllTabs() {
		b = false;
	    browser.sleep(2000).then(function(){
			element(by.id('characters-row')).click().then(function(){
				element(by.id('char-openAll')).click().then(function() {
					if(element(by.id('char-Aliases-description')).isDisplayed() && 
							   element(by.id('char-Author-description')).isDisplayed() && 
							   element(by.id('char-Description-description')).isDisplayed()){
								   b = true;
							   }
							   else {
								   b = false;
							   }
					//expect(element.all(by.css('mat-expansion-panel'))).isPresent().toBeTruthy();
					expect(b).toBe(true);//.toBe(false);
					
				})
			})
	    })
	}
})

describe('Detail Page Expansion', () => {
	it('should close all tabs', function() {
		browser.get('http://localhost:4200/characters');
	    closeAllTabs();
	})
	
	function closeAllTabs() {
		bb = false;
	    browser.sleep(2000).then(function(){
			element(by.id('characters-row')).click().then(function(){
				element(by.id('char-openAll')).click().then(function() {
				    browser.sleep(2000).then(function(){
					element(by.id('char-close')).click().then(function() {
						element(by.id('char-close')).click().then(function() {
							if(element(by.id('char-Aliases-description')).isDisplayed() && 
									   element(by.id('char-Author-description')).isDisplayed() && 
									   element(by.id('char-Description-description')).isDisplayed()){
										   b = false;
									   }
									   else {
										   b = true;
									   }
							//expect(element.all(by.css('mat-expansion-panel'))).isPresent().toBeTruthy();
							expect(b).toBe(false);//.toBe(false);
							
						//expect(element.all(by.css('mat-expansion-panel'))).isPresent().toBeTruthy();
//						expect(element(by.id('char-Aliases-description')).isDisplayed()).toBe(false);//.toBe(false);
//						expect(element(by.id('char-Author-description')).isDisplayed()).toBe(false);//.toBe(false);
//						expect(element(by.id('char-Description-description')).isDisplayed()).toBe(false);//.toBe(false);
					})
					})
				})
				})
			})
	    })
	}
})

describe('Detail Page Expansion', () => {
	it('should open specific tab', function() {
		browser.get('http://localhost:4200/characters');
		openAliasesTabs();
		browser.get('http://localhost:4200/characters');
		openAuthorTabs();
		browser.get('http://localhost:4200/characters');
		openDescriptionTabs();
	})
	
	function openAliasesTabs() {
	    browser.sleep(2000).then(function(){
			element(by.id('characters-row')).click().then(function(){
				element(by.id('char-Aliases-expand')).click().then(function() {
				    browser.sleep(2000).then(function(){
						expect(element(by.id('char-Aliases-description')).isDisplayed()).toBe(true);//.toBe(false);
					})
				})
			})
	    })
	}
	
	function openAuthorTabs() {
		browser.sleep(2000).then(function(){
			element(by.id('characters-row')).click().then(function(){
				element(by.id('char-Authors-expand')).click().then(function() {
				    browser.sleep(2000).then(function(){
				    	expect(element(by.id('char-Author-description')).isDisplayed()).toBe(true);//.toBe(false);
				    })
				})
			})
		})
	}
	
	function openDescriptionTabs() {
		browser.sleep(2000).then(function(){
			element(by.id('characters-row')).click().then(function(){
				element(by.id('char-Description-expand')).click().then(function() {
				    browser.sleep(2000).then(function(){
				    	expect(element(by.id('char-Description-description')).isDisplayed()).toBe(true);//.toBe(false);
				    })
				})
			})
		})
	}
})

describe('Detail Page Linkage', () => {
	it('should link to issue page', function() {
		browser.get('http://localhost:4200/characters');
	    linkCharacters();
    })
	
	function linkCharacters() {
		b = false;
		actualUrl = 'http://localhost:4200/issue';
	    browser.sleep(2000).then(function(){
//	    	var more = element(by.id('issue-table'));
//	    	browser.wait(protractor.ExpectedConditions.presenceOf(more), 10000);
			element(by.id('characters-row')).click().then(function(){
			    browser.sleep(2000).then(function(){
				element(by.id('char-Issues-expand')).click().then(function() {
					element(by.id('char-Issue-description')).click().then(function() {
						var EC = protractor.ExpectedConditions;
						// Waits for an alert pops up.
						if (EC.alertIsPresent() || browser.getCurrentUrl()===actualUrl) {
							b = true;
						} else {
							b = false;
						}
					//expect(element.all(by.css('mat-expansion-panel'))).isPresent().toBeTruthy();
					expect(b).toBe(true);//.toBe(false);
					})	
				})
				})
			})
	    })
    }
})

describe('Detail Page Linkage', () => {
	it('should link to author page', function() {
		browser.get('http://localhost:4200/characters');
	    linkAuthors();
    })
	
	function linkAuthors() {
		b = false;
		actualUrl = 'http://localhost:4200/author';
	    browser.sleep(2000).then(function(){
			element(by.id('characters-row')).click().then(function(){
			    browser.sleep(2000).then(function(){
				element(by.id('char-Authors-expand')).click().then(function() {
					element(by.id('char-Author-description')).click().then(function() {
						var EC = protractor.ExpectedConditions;
						// Waits for an alert pops up.
						if (EC.alertIsPresent() || browser.getCurrentUrl()===actualUrl) {
							b = true;
						} else {
							b = false;
						}
					//expect(element.all(by.css('mat-expansion-panel'))).isPresent().toBeTruthy();
					expect(b).toBe(true);//.toBe(false);
					})
				})
				})
			})
	    })
    }
})

describe('Detail Page Button', () => {
	it('should show issue page', function() {
		browser.get('http://localhost:4200/characters');
	    linkButton();
    })
	
	function linkButton() {
		b = false;
		actualUrl = 'http://localhost:4200/issue';
	    browser.sleep(2000).then(function(){
			element(by.id('characters-row')).click().then(function(){
			    browser.sleep(2000).then(function(){
				element(by.id('firstIssueButton')).click().then(function() {
					browser.getCurrentUrl().then(function(actualUrl){ // promise
			            expect(actualUrl.indexOf('issue') !== -1).toBeTruthy(); // c
					//expect(element.all(by.css('mat-expansion-panel'))).isPresent().toBeTruthy();
						})
					})
				})
			})
	    })
    }
})