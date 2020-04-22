import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { Character } from '../character';
import { CharacterPage } from '../character-page';
import { DatabaseService } from '../database.service';
import { StateService } from '../state.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

  keyword:string;
  searchModel = 'search-page';
  currPage = 1;
  totalPages = 2;

  constructor(private databaseService: DatabaseService, private stateService: StateService, private router: Router) { }


  // searchHandler = {
  //   next: data => {
  //     let authorPage: AuthorPage;
  //     authorPage = data;
  //     this.authors = authorPage.results;
  //     this.dataSource = new MatTableDataSource<Author>(this.authors);
  //     this.currPage = authorPage.page_num;
  //     this.totalPages = authorPage.pages_total;
  //   }
 // };

  ngOnInit(): void {
    this.keyword = this.stateService.getKeyword();
    if(this.keyword == undefined) {
      this.router.navigateByUrl('/characters');
    }
  }

  search(value: string) {

  }

  // backPage() {
  //   this.databaseService.getSearchResults(this.currPage - 1).subscribe(this.searchHandler);
  // }

  // forwardPage() {
  //   this.databaseService.getSearchResults(this.currPage + 1).subscribe(this.searchHandler);
  // }

}
