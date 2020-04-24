import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CharacterPage } from './character-page';
import { AuthorPage } from './author-page';
import { IssuePage } from './issue-page';
import { Observable } from 'rxjs';
import { ListingPage } from './listing-page';
import { SingleCharacter } from './character';
import { SingleAuthor } from './author';
import { SingleIssue } from './issue';
import {  SearchResults } from './search-results';

const fullyDetailedCharactersUrl = 'https://super-phase2-api.appspot.com/characters/';
const fullyDetailedAuthorsUrl = 'https://super-phase2-api.appspot.com/authors/';
const fullyDetailedIssuesUrl = 'https://super-phase2-api.appspot.com/issues/';

const nameOnlyCharactersUrl = 'https://super-phase2-api.appspot.com/listChars';
const nameOnlyAuthorsUrl = 'https://super-phase2-api.appspot.com/listAuthors';
const nameOnlyIssuesUrl =  'https://super-phase2-api.appspot.com/listIssues';

const singleCharacterUrl = 'https://super-phase2-api.appspot.com/character/';
const singleAuthorUrl = 'https://super-phase2-api.appspot.com/author/';
const singleIssueUrl = 'https://super-phase2-api.appspot.com/issue/'

const searchTermUrl =  'https://super-phase2-api.appspot.com/search/';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private http: HttpClient) { }

  getCharacters(page: number): Observable<CharacterPage> {
    let finalUrl = fullyDetailedCharactersUrl + page;
    return this.http.get<CharacterPage>(finalUrl);
  }
  getAuthors(page: number): Observable<AuthorPage> {
    let finalUrl = fullyDetailedAuthorsUrl + page;
    return this.http.get<AuthorPage>(finalUrl);
  }
  getIssues(page: number): Observable<IssuePage> {
    let finalUrl = fullyDetailedIssuesUrl + page;
    return this.http.get<IssuePage>(finalUrl);
  }

  getCharacterNames(): Observable<ListingPage> {
    return this.http.get<ListingPage>(nameOnlyCharactersUrl);
  }
  getIssueNames(): Observable<ListingPage> {
    return this.http.get<ListingPage>(nameOnlyIssuesUrl);
  }
  getAuthorNames(): Observable<ListingPage> {
    return this.http.get<ListingPage>(nameOnlyAuthorsUrl);
  }

  getSingleCharacter(character: string): Observable<SingleCharacter> {
    let finalUrl = singleCharacterUrl + character;
    return this.http.get<SingleCharacter>(finalUrl);
  }
  getSingleAuthor(author: string): Observable<SingleAuthor> {
    let finalUrl = singleAuthorUrl + author;
    return this.http.get<SingleAuthor>(finalUrl);
  }
  getSingleIssue(issue: string): Observable<SingleIssue> {
    let finalUrl = singleIssueUrl + issue;
    return this.http.get<SingleIssue>(finalUrl);
  }

  getSearchTerm(keyword: string, currpage: number): Observable<SearchResults> {
    let finalUrl = searchTermUrl + keyword+'/'+currpage;
    return this.http.get<SearchResults>(finalUrl);
  }

}
