import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeveloperComponent } from './developer.component';
import { Developer } from '../developer';

describe('DeveloperComponent', () => {
  let component: DeveloperComponent;
  let fixture: ComponentFixture<DeveloperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ DeveloperComponent ]
    });
    fixture = TestBed.createComponent(DeveloperComponent);
    component = fixture.componentInstance;

    let testDeveloper: Developer = {
      name: 'Mr Developer',
      photoUrl: '',
      bio: 'I am a developer',
      track: '',
      team: 'backend',
      numCommits: 5,
      numIssues: 1,
      numTests: 2
    };
    component.info = testDeveloper;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
