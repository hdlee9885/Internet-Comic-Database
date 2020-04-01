import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DatabaseService } from '../database.service';
import { CharactersComponent } from './characters.component';
import { CharacterPage } from '../character-page';
import { Observable } from 'rxjs';
import { Character } from '../character';
import { StateService } from '../state.service';
import { NavigationExtras, Router, UrlTree } from '@angular/router';

describe('CharactersComponent', () => {
  let component: CharactersComponent;
  let fixture: ComponentFixture<CharactersComponent>;

  let gotPage: number;
  let savedCharacter: Character;

  let characters1: Character[] = [
    {
      aliases: 'Peter Parker',
      alignment: 'good',
      api_detail_url: '',
      appearance: undefined,
      creators: undefined,
      deck: '',
      description: '',
      first_appeared_in_issue: '',
      issues: undefined,
      image: '',
      name: 'Spider-Man',
      real_name: 'Peter Parker'
    }
  ];
  let characters2: Character[] = [
    {
      aliases: 'Bruce Wayne',
      alignment: 'good',
      api_detail_url: '',
      appearance: undefined,
      creators: undefined,
      deck: '',
      description: '',
      first_appeared_in_issue: '',
      issues: undefined,
      image: '',
      name: 'Batman',
      real_name: 'Bruce Wayne'
    }
  ];


  let testCharacterPage: CharacterPage[] = [
    {
      page_num: 1,
      pages_total: 2,
      response: 'Success',
      results: characters1
    },
    {
      page_num: 2,
      pages_total: 2,
      response: 'Success',
      results: characters2
    }
  ];

  let stateServiceStub: Partial<StateService>;
  let routerServiceStub: Partial<Router>;
  let databaseServiceStub: Partial<DatabaseService>;

  beforeEach(() => {

    databaseServiceStub = {
      getCharacters(page: number): Observable<CharacterPage> {
        gotPage = page;
        return new Observable<CharacterPage>((observer) => {
          observer.next(testCharacterPage[page - 1]);
          observer.complete();
        })
      }
    };

    stateServiceStub = {
      setCharacter(character: Character) {
        savedCharacter = character;
      }
    };

    routerServiceStub = {
      navigateByUrl(url: string | UrlTree, extras?: NavigationExtras): Promise<boolean> {
        return undefined;
      }
    };

    TestBed.configureTestingModule({
      declarations: [ CharactersComponent ],
      providers: [
        { provide: DatabaseService, useValue: databaseServiceStub },
        { provide: StateService, useValue: stateServiceStub },
        { provide: Router, useValue: routerServiceStub }
      ]
    });

    fixture = TestBed.createComponent(CharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get correct page of characters', () => {
    component.forwardPage();
    expect(gotPage).toEqual(2);
    component.backPage();
    expect(gotPage).toEqual(1);
  });

  it('should save correct character', () => {
    component.detailCharacter(characters1[0]);
    expect(savedCharacter).toEqual(characters1[0]);
    component.detailCharacter(characters2[0]);
    expect(savedCharacter).toEqual(characters2[0]);
  });
});
