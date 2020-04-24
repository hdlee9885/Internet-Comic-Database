// spec.js
describe('ICDB Test', function () {
    it('should return title of web', function () {
        browser.get('http:\\localhost:4200');

        console.log(browser.getTitle());
        expect(browser.getTitle()).toEqual("icdb");

    });
});

describe('Issues Home Page', () => {
	it('should nav to issues preview page', function() {
		browser.get('http:\\localhost:4200');
		navigateToIssuesPage();
	});

	function navigateToIssuesPage(){
	  	actualUrl = 'http://localhost:4200/#/issues';
	    element(by.id('issues-nav')).click().then(function(){ // first find list-home a tag and than click 
	        browser.sleep(2000).then(function(){
	          browser.getCurrentUrl().then(function(actualUrl){ // promise
	            expect(actualUrl.indexOf('issues') !== -1).toBeTruthy(); // check the current url is list
	          });
	        });

	    });
	  }
});
describe('Issues Detailed Page', () => {
    it('should nav to issues detail page', function () {
        browser.get('http://localhost:4200/#/issues');
        navigateToIssueDetailedPage();
    });

    function navigateToIssueDetailedPage() {
        actualUrl = 'http://localhost:4200/#/issue';
        const issuesList = element.all(by.id('issues-row'));
        const issuesCount = issuesList.count();
        for (var i = 0; i < issuesCount; i++) {
            element(by.id(issuesList[i])).click().then(function () {
                browser.sleep(2000).then(function () {
                    browser.getCurrentUrl().then(function (actualUrl) { // promise
                        expect(browser.getCurrentUrl()).toEqual(actualUrl);
                    });
                });
            });
        }
    }
});


describe('Preview Page Forward and Backward', () => {
    it('should nav to next page and test new issues', function () {
        browser.get('http://localhost:4200/#/issues');
        forwardToNextIssues();
    });

    it('should nav to previous page and test older issues', function () {
        browser.get('http://localhost:4200/#/issues');
        backwardToPreviousIssues();
    });

    function forwardToNextIssues() {
        element(by.id('issues-fwdbutton')).click().then(function () {
            const issuesList = element.all(by.id('issues-row'));
            const issuesCount = issuesList.count();
            for (var i = 0; i < issuesCount; i++) {
                s = element(by.id('issues-name')).getText();
                element(by.id('issues-row')).click().then(function () {
                    t = element(by.id('issue-header-name')).getText();
                    expect(s).toEqual(t);
                });
            }
        });
    };

    function backwardToPreviousIssues() {
        element(by.id('issues-fwdbutton')).click().then(function () {
            element(by.id('issues-backbutton')).click().then(function () {
                const issuesList = element.all(by.id('issues-row'));
                const issuesCount = issuesList.count();
                for (var i = 0; i < issuesCount; i++) {
                    s = element(by.id('issues-name')).getText();
                    element(by.id('issues-row')).click().then(function () {
                        t = element(by.id('issues-header-name')).getText();
                        expect(s).toEqual(t);
                    });
                }
            });
        });
    };

});

describe('Detail Page Expansion', () => {
	it('should open all tabs', function() {
		browser.get('http://localhost:4200/#/issues');
	    openAllTabs();
    })
    
    it('should close all tabs', function() {
		browser.get('http://localhost:4200/#/issues');
	    closeAllTabs();
    })

	
	function openAllTabs() {
		b = false;
	    browser.sleep(2000).then(function(){
			element(by.id('issues-row')).click().then(function(){
				element(by.id('issues-openAll')).click().then(function() {
					if(element(by.id('issue-desc-desc')).isDisplayed() && 
							   element(by.id('issue-char-desc')).isDisplayed() && 
							   element(by.id('issue-author-desc')).isDisplayed()){
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
    
    function closeAllTabs() {
		b = false;
	    browser.sleep(2000).then(function(){
			element(by.id('issues-row')).click().then(function(){
				element(by.id('issues-openAll')).click().then(function() {
                    element(by.id('issues-closeAll')).click().then(function() {
					if(element(by.id('issue-desc-desc')).isDisplayed() && 
							   element(by.id('issue-char-desc')).isDisplayed() && 
							   element(by.id('issue-author-desc')).isDisplayed()){
								   b = false;
							   }
							   else {
								   b = true;
							   }
					//expect(element.all(by.css('mat-expansion-panel'))).isPresent().toBeTruthy();
					expect(b).toBe(false);//.toBe(false);
					
				})
			})
	    })
     })
    }
})

describe('Detail Page Expansion One by One', () => {
	it('should open the Description Tab', function() {
		browser.get('http://localhost:4200/#/issues');
	    openDescriptionTab();
    })

    
    it('should open the Characters Tab', function() {
		browser.get('http://localhost:4200/#/issues');
	    openCharactersTab();
    })

    it('should open the Authors Tab', function() {
		browser.get('http://localhost:4200/#/issues');
	    openAuthorsTab();
    })

	
	function openDescriptionTab() {
	    browser.sleep(2000).then(function(){
			element(by.id('issues-row')).click().then(function(){
				element(by.id('issue-desc-panel')).click().then(function() {
					expect(element(by.id('issue-desc-desc')).isDisplayed()).toBe(true);//.toBe(false);
					
				})
			})
	    })
    }
    
    function openCharactersTab() {
	    browser.sleep(2000).then(function(){
			element(by.id('issues-row')).click().then(function(){
				element(by.id('issue-char-panel')).click().then(function() {
					expect(element(by.id('issue-char-desc')).isDisplayed()).toBe(true);
	            })
            })
        })
    }

    function openAuthorsTab() {
	    browser.sleep(2000).then(function(){
			element(by.id('issues-row')).click().then(function(){
				element(by.id('issue-author-panel')).click().then(function() {
					expect(element(by.id('issue-author-desc')).isDisplayed()).toBe(true);
	            })
            })
        })
    }
})

describe('Detail Page Linkage', () => {
	it('should link to character page', function() {
		browser.get('http://localhost:4200/#/issues');
	    linkCharacters();
    })
	
	function linkCharacters() {
		b = false;
		actualUrl = 'http://localhost:4200/#/character';
	    browser.sleep(2000).then(function(){
//	    	var more = element(by.id('issue-table'));
//	    	browser.wait(protractor.ExpectedConditions.presenceOf(more), 10000);
			element(by.id('issues-row')).click().then(function(){
			    browser.sleep(2000).then(function(){
				element(by.id('issue-char-panel')).click().then(function() {
					element(by.id('issue-Characters-description')).click().then(function() {
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
		browser.get('http://localhost:4200/#/issues');
	    linkAuthors();
    })
	
	function linkAuthors() {
		b = false;
		actualUrl = 'http://localhost:4200/#/author';
	    browser.sleep(2000).then(function(){
			element(by.id('issues-row')).click().then(function(){
			    browser.sleep(2000).then(function(){
				element(by.id('issue-author-panel')).click().then(function() {
					element(by.id('issue-Authors-description')).click().then(function() {
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

describe('Issues Page can Search', () => {
	it('should show search page', function() {
		browser.get('http://localhost:4200/#/issues');
		linkSearch();
	})
	
	function linkSearch() {
		element(by.id('search-input')).sendKeys('man').then(function() {
			element(by.id('search-button')).click().then(function() {
				browser.getCurrentUrl().then(function(actualUrl){ // promise
		            expect(actualUrl.indexOf('search-page') !== -1).toBeTruthy();
				})
			})
		});
	}
})

describe('Issue Detail Page can Search', () => {
	it('should show search page', function() {
		browser.get('http://localhost:4200/#/issue');
		linkSearch();
	})
	
	function linkSearch() {
		element(by.id('search-input')).sendKeys('iron').then(function() {
			element(by.id('search-button')).click().then(function() {
				browser.getCurrentUrl().then(function(actualUrl){ // promise
		            expect(actualUrl.indexOf('search-page') !== -1).toBeTruthy();
				})
			})
		});
	}
})