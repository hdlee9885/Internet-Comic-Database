import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CharacterPage } from './character-page';
import { AuthorPage } from './author-page';
import { IssuePage } from './issue-page';
import { Observable } from 'rxjs';
import { ListingPage } from './listing-page';

const allCharactersUrl = 'https://super-phase2-api.appspot.com/characters/';
const allAuthorsUrl = 'https://super-phase2-api.appspot.com/authors/';
const allIssuesUrl = 'https://super-phase2-api.appspot.com/issues/';
const justCharacterUrl = 'https://super-phase2-api.appspot.com/listChars/';
const justAuthorsUrl = 'https://super-phase2-api.appspot.com/listAuthors/';
const justIssuesUrl =  'https://super-phase2-api.appspot.com/listIssues/';


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

  getIssues(page: number): Observable<IssuePage> {
    let finalUrl = allIssuesUrl + page;
    return this.http.get<IssuePage>(finalUrl);
  }

  getlistCharacters(): Observable<ListingPage>{
    let finalUrl =justCharacterUrl;
    return this.http.get<ListingPage>(finalUrl);
  }

  getlistIssues(): Observable<ListingPage>{
    let finalUrl =justIssuesUrl;
    return this.http.get<ListingPage>(finalUrl);
  }

  getlistAuthors(): Observable<ListingPage>{
    let finalUrl =justAuthorsUrl;
    return this.http.get<ListingPage>(finalUrl);
  }
  
}
