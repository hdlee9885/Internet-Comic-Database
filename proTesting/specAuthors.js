describe('Author Preview Page', () => {
	it('should nav to the author preview page', function() {
		browser.get('http:\\localhost:4200');
		navigateToAuthorsPage();
	});
	
	function navigateToAuthorsPage(){
	  	actualUrl = 'http://localhost:4200/authors';
	    element(by.id('authors-nav')).click().then(function(){ // first find list-home a tag and than click 
	        browser.sleep(2000).then(function(){
	          browser.getCurrentUrl().then(function(actualUrl){ // promise
	            expect(actualUrl.indexOf('authors') !== -1).toBeTruthy(); // check the current url is list
	          });
	        });

	    });
	  }
});

describe('Authors Detailed Page', () => {
    it('should nav to authors detail page', function () {
        browser.get('http://localhost:4200/authors');
        navigateToAuthorDetailedPage();
    });

    function navigateToAuthorDetailedPage() {
        actualUrl = 'http://localhost:4200/author';
        const issuesList = element.all(by.id('authors-row'));
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
    it('should nav to next page and test new authors', function () {
        browser.get('http://localhost:4200/authors');
        forwardToNextAuthors();
    });

    it('should nav to previous page and test older authors', function () {
        browser.get('http://localhost:4200/authors');
        backwardToPreviousAuthors();
    });

    function forwardToNextAuthors() {
        element(by.id('authors-fwdbutton')).click().then(function () {
            const issuesList = element.all(by.id('authors-row'));
            const issuesCount = issuesList.count();
            for (var i = 0; i < issuesCount; i++) {
                s = element(by.id('authors-name')).getText();
                element(by.id('authors-row')).click().then(function () {
                    t = element(by.id('authors-header-name')).getText();
                    expect(s).toEqual(t);
                });
            }
        });
    };

    function backwardToPreviousAuthors() {
        element(by.id('authors-fwdbutton')).click().then(function () {
            element(by.id('authors-backbutton')).click().then(function () {
                const issuesList = element.all(by.id('authors-row'));
                const issuesCount = issuesList.count();
                for (var i = 0; i < issuesCount; i++) {
                    s = element(by.id('authors-name')).getText();
                    element(by.id('authors-row')).click().then(function () {
                        t = element(by.id('authors-header-name')).getText();
                        expect(s).toEqual(t);
                    });
                }
            });
        });
    };

});