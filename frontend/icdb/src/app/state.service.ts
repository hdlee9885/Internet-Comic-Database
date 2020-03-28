import { Injectable } from '@angular/core';
import { Author } from './author';
import { Character } from './character';
import { Issue } from './issue';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  currAuthor: Author;
  currCharacter: Character;
  currIssue: Issue;

  constructor() { }

  setAuthor(author: Author) {
    this.currAuthor = author;
  }
  getAuthor(): Author {
    return this.currAuthor;
  }

  setCharacter(character: Character) {
    this.currCharacter = character;
  }
  getCharacter(): Character {
    return this.currCharacter;
  }

  setIssue(issue: Issue) {
    this.currIssue = issue;
  }
  getIssue(): Issue {
    return this.currIssue;
  }
}
