import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IssueComponent } from './issue.component';
import { Issue } from '../issue';
import { StateService } from '../state.service';
import { MatAccordion } from '@angular/material/expansion';

describe('IssueComponent', () => {
  let component: IssueComponent;
  let fixture: ComponentFixture<IssueComponent>;

  let testIssue: Issue = {
    character_credits: undefined,
    cover_date: '',
    description: '',
    name: 'The Amazing Spider Man',
    person_credits: undefined,
    series: '',
    image: ''
  };

  let stateServiceStub: Partial<StateService>;

  beforeEach(() => {
    stateServiceStub = {
      getIssue(){
        return testIssue;
      }
    };
    TestBed.configureTestingModule({
      declarations: [ IssueComponent, MatAccordion ],
      providers: [
        { provide: StateService, useValue: stateServiceStub }
      ]
    });
    fixture = TestBed.createComponent(IssueComponent);
    component = fixture.componentInstance
    fixture.detectChanges();
  });

  it('should create', () => {
    component.openAllPanels();
    component.closeAllPanels();
    expect(component).toBeTruthy();
  });
});
