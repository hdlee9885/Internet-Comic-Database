import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { DatabaseService } from './database.service';
import { CharacterPage } from './character-page';
import { AuthorPage } from './author-page';
import { IssuePage } from './issue-page';

describe('DatabaseService', () => {
  let service: DatabaseService;
  var originalTimeout: number;

  beforeEach(() => {
    originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 5000;
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [DatabaseService]
    });
    service = TestBed.inject(DatabaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should GET characters by page number', (done: DoneFn) => {
    service.getCharacters(3).subscribe(data => {
      let page: CharacterPage;
      page = data;
      expect(page.page_num).toEqual(3);
      done();
    })
  });

  it('should GET authors by page number', (done: DoneFn) => {
    service.getAuthors(2).subscribe(data => {
      let page: AuthorPage;
      page = data;
      expect(page.page_num).toEqual(2);
      done();
    })
  });

  it('should GET issues by page number', (done: DoneFn) => {
    service.getIssues(1).subscribe(data => {
      let page: IssuePage;
      page = data;
      expect(page.page_num).toEqual(1);
      done();
    })
  });

  afterEach(() => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
  })
});
