import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CharacterPage } from './character-page';
import { Observable } from 'rxjs';

const allCharactersUrl = 'https://super-phase2-api.appspot.com/characters/';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private http: HttpClient) { }

  getCharacters(page: number): Observable<CharacterPage> {
    let finalUrl = allCharactersUrl + page;
    return this.http.get<CharacterPage>(finalUrl);
  }
}
