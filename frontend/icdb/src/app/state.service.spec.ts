import { TestBed } from '@angular/core/testing';
import { StateService } from './state.service';
import { Character } from './character';
import { Author } from './author';
import { Issue } from './issue';

describe('StateService', () => {
  let service: StateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  let character: Character = {
    aliases: '',
    alignment: '',
    api_detail_url: '',
    appearance: undefined,
    creators: undefined,
    deck: '',
    description: '',
    first_appeared_in_issue: '',
    issues: undefined,
    image: '',
    name: 'Spider-Man-Test',
    real_name: ''
  };

  it('should store character', () => {
    service.setCharacter(character);
    let receivedChar = service.getCharacter();
    expect(receivedChar).toEqual(character);
  });

  let author: Author = {
    aliases: '',
    birth: '',
    country: '',
    death: '',
    deck: '',
    description: '',
    characters: undefined,
    issues: undefined,
    hometown: '',
    image: '',
    name: 'Stan-Lee-Test'
  };

  it('should store author', () => {
    service.setAuthor(author);
    let receivedAuthor = service.getAuthor();
    expect(receivedAuthor).toEqual(author);
  });

  let issue: Issue = {
    character_credits: undefined,
    cover_date: '',
    description: '',
    name: 'A-Test-Comic-Book',
    person_credits: undefined,
    series: '',
    image: ''
  };

  it('should store issue', () => {
    service.setIssue(issue);
    let receivedIssue = service.getIssue();
    expect(receivedIssue).toEqual(issue);
  })

});
