import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CharacterPage } from './character-page';
import { AuthorPage } from './author-page';
import { Observable } from 'rxjs';

const allCharactersUrl = 'https://super-phase2-api.appspot.com/characters/';
const allAuthorsUrl = 'https://super-phase2-api.appspot.com/authors/';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private http: HttpClient) { }

  getCharacters(page: number): Observable<CharacterPage> {
    let finalUrl = allCharactersUrl + page;
    return this.http.get<CharacterPage>(finalUrl);
  }

  getAuthors(page: number): Observable<AuthorPage> {
    let finalUrl = allAuthorsUrl + page;
    return this.http.get<AuthorPage>(finalUrl);
  }
}
