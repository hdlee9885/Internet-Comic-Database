import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { AboutService } from './about.service';
import { Issues } from './issues';

describe('AboutService', () => {
  let service: AboutService;
  var originalTimeout;

  beforeEach(() => {
    originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 2000;
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [AboutService]
    });
    service = TestBed.inject(AboutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get stats for each contributor', (done: DoneFn) => {
    service.getStats().subscribe(data => {
      let numContributors = 0;
      for(let contributor in data) {
        numContributors++;
      }
      expect(numContributors).toBe(6);
      done();
    });
  });

  it('should get issues from repository', (done: DoneFn) => {
    service.getIssues().subscribe(data => {
      let issue: Issues;
      for(issue of data) {
        console.log(data);
        console.log(issue);
        let issuesUrl = issue.url.substring(0, 62);
        expect(issuesUrl).toBe('https://api.github.com/repos/chrisjoswin/EE461L_Project/issues');
      }
      done();
    })
  });

  afterEach(() => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
  });
});
