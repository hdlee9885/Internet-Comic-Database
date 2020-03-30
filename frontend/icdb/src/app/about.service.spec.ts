import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { AboutService } from './about.service';



describe('AboutService', () => {
  let service: AboutService;
  var originalTimeout;

  beforeEach(() => {
    originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;
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
      for(let contributor in data){
        numContributors++;
      }
      expect(numContributors).toBe(6);
      done();
    });
  });

  afterEach(function() {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
  });
});
