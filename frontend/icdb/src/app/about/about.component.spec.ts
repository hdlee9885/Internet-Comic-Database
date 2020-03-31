import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AboutComponent } from './about.component';
import { Stats } from '../stats';
import { Issues } from '../issues';
import { of } from 'rxjs';
import { AboutService } from '../about.service';
import { User } from '../user';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  let getStatSpy;
  let getIssuesSpy;

  let authors: User[] = [
    {
      login: 'jacobgrimm',
      id: undefined,
      node_id: '',
      avatar_url: '',
      gravatar_id: '',
      url: '',
      html_url: '',
      followers_url: '',
      following_url: '',
      gists_url: '',
      starred_url: '',
      subscriptions_url: '',
      organizations_url: '',
      repos_url: '',
      events_url: '',
      received_events_url: '',
      type: '',
      site_admin: undefined
    },
    {
      login: 'Minalinnski',
      id: undefined,
      node_id: '',
      avatar_url: '',
      gravatar_id: '',
      url: '',
      html_url: '',
      followers_url: '',
      following_url: '',
      gists_url: '',
      starred_url: '',
      subscriptions_url: '',
      organizations_url: '',
      repos_url: '',
      events_url: '',
      received_events_url: '',
      type: '',
      site_admin: undefined
    },
    {
      login: 'chrisjoswin',
      id: undefined,
      node_id: '',
      avatar_url: '',
      gravatar_id: '',
      url: '',
      html_url: '',
      followers_url: '',
      following_url: '',
      gists_url: '',
      starred_url: '',
      subscriptions_url: '',
      organizations_url: '',
      repos_url: '',
      events_url: '',
      received_events_url: '',
      type: '',
      site_admin: undefined
    },
    {
      login: 'JSRobles',
      id: undefined,
      node_id: '',
      avatar_url: '',
      gravatar_id: '',
      url: '',
      html_url: '',
      followers_url: '',
      following_url: '',
      gists_url: '',
      starred_url: '',
      subscriptions_url: '',
      organizations_url: '',
      repos_url: '',
      events_url: '',
      received_events_url: '',
      type: '',
      site_admin: undefined
    },
    {
      login: 'hdlee9885',
      id: undefined,
      node_id: '',
      avatar_url: '',
      gravatar_id: '',
      url: '',
      html_url: '',
      followers_url: '',
      following_url: '',
      gists_url: '',
      starred_url: '',
      subscriptions_url: '',
      organizations_url: '',
      repos_url: '',
      events_url: '',
      received_events_url: '',
      type: '',
      site_admin: undefined
    },
    {
      login: 'j-ka11',
      id: undefined,
      node_id: '',
      avatar_url: '',
      gravatar_id: '',
      url: '',
      html_url: '',
      followers_url: '',
      following_url: '',
      gists_url: '',
      starred_url: '',
      subscriptions_url: '',
      organizations_url: '',
      repos_url: '',
      events_url: '',
      received_events_url: '',
      type: '',
      site_admin: undefined
    }
  ];
  let testStat: Stats[] = [
    {
      total: 1,
      weeks: undefined,
      author: authors[2]
    },
    {
      total: 2,
      weeks: undefined,
      author: authors[5]
    },
    {
      total: 3,
      weeks: undefined,
      author: authors[4]
    },
    {
      total: 4,
      weeks: undefined,
      author: authors[0]
    },
    {
      total: 5,
      weeks: undefined,
      author: authors[3]
    },
    {
      total: 6,
      weeks: undefined,
      author: authors[1]
    }
  ];
  let testIssues: Issues[] = [
    {
      url: '',
      repository_url: '',
      labels_url: '',
      comments_url: '',
      events_url: '',
      html_url: '',
      id: undefined,
      node_id: '',
      number: 1,
      title: 'test issue',
      user: authors[0],
      labels: undefined,
      state: '',
      locked: false,
      assignee: null,
      assignees: undefined,
      milestone: null,
      comments: 0,
      created_at: undefined,
      updated_at: '',
      closed_at: undefined,
      author_association: '',
      body: 'this is a test body'
    },
    {
      url: '',
      repository_url: '',
      labels_url: '',
      comments_url: '',
      events_url: '',
      html_url: '',
      id: undefined,
      node_id: '',
      number: 1,
      title: 'test issue',
      user: authors[1],
      labels: undefined,
      state: '',
      locked: false,
      assignee: null,
      assignees: undefined,
      milestone: null,
      comments: 0,
      created_at: undefined,
      updated_at: '',
      closed_at: undefined,
      author_association: '',
      body: 'this is a test body'
    },
    {
      url: '',
      repository_url: '',
      labels_url: '',
      comments_url: '',
      events_url: '',
      html_url: '',
      id: undefined,
      node_id: '',
      number: 1,
      title: 'test issue',
      user: authors[2],
      labels: undefined,
      state: '',
      locked: false,
      assignee: null,
      assignees: undefined,
      milestone: null,
      comments: 0,
      created_at: undefined,
      updated_at: '',
      closed_at: undefined,
      author_association: '',
      body: 'this is a test body'
    },
    {
      url: '',
      repository_url: '',
      labels_url: '',
      comments_url: '',
      events_url: '',
      html_url: '',
      id: undefined,
      node_id: '',
      number: 1,
      title: 'test issue',
      user: authors[3],
      labels: undefined,
      state: '',
      locked: false,
      assignee: null,
      assignees: undefined,
      milestone: null,
      comments: 0,
      created_at: undefined,
      updated_at: '',
      closed_at: undefined,
      author_association: '',
      body: 'this is a test body'
    },
    {
      url: '',
      repository_url: '',
      labels_url: '',
      comments_url: '',
      events_url: '',
      html_url: '',
      id: undefined,
      node_id: '',
      number: 1,
      title: 'test issue',
      user: authors[4],
      labels: undefined,
      state: '',
      locked: false,
      assignee: null,
      assignees: undefined,
      milestone: null,
      comments: 0,
      created_at: undefined,
      updated_at: '',
      closed_at: undefined,
      author_association: '',
      body: 'this is a test body'
    },
    {
      url: '',
      repository_url: '',
      labels_url: '',
      comments_url: '',
      events_url: '',
      html_url: '',
      id: undefined,
      node_id: '',
      number: 1,
      title: 'test issue',
      user: authors[5],
      labels: undefined,
      state: '',
      locked: false,
      assignee: null,
      assignees: undefined,
      milestone: null,
      comments: 0,
      created_at: undefined,
      updated_at: '',
      closed_at: undefined,
      author_association: '',
      body: 'this is a test body'
    }
  ];

  beforeEach(() => {
    const aboutService = jasmine.createSpyObj('AboutService', ['getStats', 'getIssues']);
    getStatSpy = aboutService.getStats.and.returnValue(of(testStat));
    getIssuesSpy = aboutService.getIssues.and.returnValue(of(testIssues));

    TestBed.configureTestingModule({
      declarations: [ AboutComponent ],
      providers: [
        { provide: AboutService, useValue: aboutService }
      ]
    });

    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update developer info correctly', () => {
    //component.ngOnInit();
    for(let i = 0; i < component.developers.length; i++) {
      expect(component.developers[i].numCommits).toEqual(testStat[i].total);
      expect(component.developers[i].numIssues).toEqual(1);
    }
  })
});
