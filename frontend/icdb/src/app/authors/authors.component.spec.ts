import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DatabaseService } from '../database.service';
import { AuthorsComponent } from './authors.component';
import { AuthorPage } from '../author-page';
import { Observable } from 'rxjs';
import { Author } from '../author';
import { StateService } from '../state.service';
import { NavigationExtras, Router, UrlTree } from '@angular/router';

describe('AuthorsComponent', () => {
  let component: AuthorsComponent;
  let fixture: ComponentFixture<AuthorsComponent>;

  let gotPage: number;
  let savedAuthor: Author;

  let authors1: Author[] = [
    {
      aliases: 'None',
      birth: '',
      country: 'England',
      death: '',
      deck: '',
      description: '',
      hometown: '',
      image: '',
      name: 'Andy Lanning'
    }
  ];
  let authors2: Author[] = [
    {
      aliases: 'None',
      birth: '',
      country: '',
      death: '',
      deck: '',
      description: '',
      hometown: '',
      image: '',
      name: 'Stan Lee'
    }
  ];


  let testAuthorPage: AuthorPage[] = [
    {
      page_num: 1,
      pages_total: 2,
      response: 'Success',
      results: authors1
    },
    {
      page_num: 2,
      pages_total: 2,
      response: 'Success',
      results: authors2
    }
  ];

  let stateServiceStub: Partial<StateService>;
  let routerServiceStub: Partial<Router>;
  let databaseServiceStub: Partial<DatabaseService>;

  beforeEach(() => {

    databaseServiceStub = {
      getAuthors(page: number): Observable<AuthorPage> {
        gotPage = page;
        return new Observable<AuthorPage>((observer) => {
          observer.next(testAuthorPage[page - 1]);
          observer.complete();
        })
      }
    };

    stateServiceStub = {
      setAuthor(author: Author) {
        savedAuthor = author;
      }
    };

    routerServiceStub = {
      navigateByUrl(url: string | UrlTree, extras?: NavigationExtras): Promise<boolean> {
        return undefined;
      }
    };

    TestBed.configureTestingModule({
      declarations: [ AuthorsComponent ],
      providers: [
        { provide: DatabaseService, useValue: databaseServiceStub },
        { provide: StateService, useValue: stateServiceStub },
        { provide: Router, useValue: routerServiceStub }
      ]
    });

    fixture = TestBed.createComponent(AuthorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get correct page of authors', () => {
    component.forwardPage();
    expect(gotPage).toEqual(2);
    component.backPage();
    expect(gotPage).toEqual(1);
  });

  it('should save correct author', () => {
    component.detailAuthor(authors1[0]);
    expect(savedAuthor).toEqual(authors1[0]);
    component.detailAuthor(authors2[0]);
    expect(savedAuthor).toEqual(authors2[0]);
  });
});
