import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Stats } from './stats';
import { Issues } from './issues';
import { Observable } from 'rxjs';

const statsUrl = 'https://api.github.com/repos/chrisjoswin/EE461L_Project/stats/contributors';
const issuesUrl = 'https://api.github.com/repos/chrisjoswin/EE461L_Project/issues';

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  constructor(private http: HttpClient) { }

  getStats(): Observable<Stats[]> {
    return this.http.get<Stats[]>(statsUrl);
  }

  getIssues(): Observable<Issues[]> {
    return this.http.get<Issues[]>(issuesUrl);
  }
}
