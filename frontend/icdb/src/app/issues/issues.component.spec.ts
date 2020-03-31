import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DatabaseService } from '../database.service';
import { IssuesComponent } from './issues.component';
import { IssuePage } from '../issue-page';
import { Observable } from 'rxjs';
import { Issue } from '../issue';
import { StateService } from '../state.service';
import { NavigationExtras, Router, UrlTree } from '@angular/router';

describe('IssuesComponent', () => {
  let component: IssuesComponent;
  let fixture: ComponentFixture<IssuesComponent>;

  let gotPage: number;
  let savedIssue: Issue;

  let issues1: Issue[] = [
    {
      character_credits: undefined,
      cover_date: '',
      description: '',
      name: 'A Hero For Earth',
      person_credits: undefined,
      series: '',
      image: ''
    }
  ];
  let issues2: Issue[] = [
    {
      character_credits: undefined,
      cover_date: '',
      description: '',
      name: 'From Beyond the Unknown',
      person_credits: undefined,
      series: '',
      image: ''
    }
  ];


  let testIssuePage: IssuePage[] = [
    {
      page_num: 1,
      pages_total: 2,
      response: 'Success',
      results: issues1
    },
    {
      page_num: 2,
      pages_total: 2,
      response: 'Success',
      results: issues2
    }
  ];

  let stateServiceStub: Partial<StateService>;
  let routerServiceStub: Partial<Router>;
  let databaseServiceStub: Partial<DatabaseService>;

  beforeEach(() => {

    databaseServiceStub = {
      getIssues(page: number): Observable<IssuePage> {
        gotPage = page;
        return new Observable<IssuePage>((observer) => {
          observer.next(testIssuePage[page - 1]);
          observer.complete();
        })
      }
    };

    stateServiceStub = {
      setIssue(issue: Issue) {
        savedIssue = issue;
      }
    };

    routerServiceStub = {
      navigateByUrl(url: string | UrlTree, extras?: NavigationExtras): Promise<boolean> {
        return undefined;
      }
    };

    TestBed.configureTestingModule({
      declarations: [ IssuesComponent ],
      providers: [
        { provide: DatabaseService, useValue: databaseServiceStub },
        { provide: StateService, useValue: stateServiceStub },
        { provide: Router, useValue: routerServiceStub }
      ]
    });

    fixture = TestBed.createComponent(IssuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get correct page of issues', () => {
    component.forwardPage();
    expect(gotPage).toEqual(2);
    component.backPage();
    expect(gotPage).toEqual(1);
  });

  it('should save correct issue', () => {
    component.detailIssue(issues1[0]);
    expect(savedIssue).toEqual(issues1[0]);
    component.detailIssue(issues2[0]);
    expect(savedIssue).toEqual(issues2[0]);
  });
});
