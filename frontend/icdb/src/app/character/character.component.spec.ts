import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CharacterComponent } from './character.component';
import { MatAccordion } from '@angular/material/expansion';
import { Character } from '../character';
import { StateService } from '../state.service';

describe('CharacterComponent', () => {
  let component: CharacterComponent;
  let fixture: ComponentFixture<CharacterComponent>;

  let testCharacter: Character = {
    aliases: 'Peter Parker',
    alignment: 'good',
    api_detail_url: '',
    appearance: undefined,
    creators: undefined,
    deck: '',
    description: '',
    first_appeared_in_issue: '',
    image: '',
    name: 'Spider-Man',
    real_name: 'Peter Parker'
  };

  let stateServiceStub: Partial<StateService>;

  beforeEach(() => {
    stateServiceStub = {
      getCharacter(): Character {
        return testCharacter;
      }
    };
    TestBed.configureTestingModule({
      declarations: [ CharacterComponent, MatAccordion ],
      providers: [
        { provide: StateService, useValue: stateServiceStub }
      ]
    });
    fixture = TestBed.createComponent(CharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    component.openAllPanels();
    component.closeAllPanels();
    expect(component).toBeTruthy();
  });
});
