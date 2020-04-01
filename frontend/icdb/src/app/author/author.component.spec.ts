import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthorComponent } from './author.component';
import { Author } from '../author';
import { StateService } from '../state.service';

describe('AuthorComponent', () => {
  let component: AuthorComponent;
  let fixture: ComponentFixture<AuthorComponent>;

  let testAuthor: Author = {
    aliases: '',
    birth: '',
    country: 'America',
    death: '',
    deck: '',
    description: '',
    characters: undefined,
    issues: undefined,
    hometown: '',
    image: '',
    name: 'Dan Abnett'
  };

  let stateServiceStub: Partial<StateService>;

  beforeEach(() => {
    stateServiceStub = {
      getAuthor(): Author {
        return testAuthor;
      }
    };
    TestBed.configureTestingModule({
      declarations: [ AuthorComponent ],
      providers: [
        { provide: StateService, useValue: stateServiceStub }
      ]
    });
    fixture = TestBed.createComponent(AuthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
