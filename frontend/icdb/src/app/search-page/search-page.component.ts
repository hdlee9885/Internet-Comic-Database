import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { DatabaseService } from '../database.service';
import { StateService } from '../state.service';
import { Search } from '../search';
import { SearchResults } from '../search-results';
import { Issue, SingleIssue } from '../issue';
import { Author, SingleAuthor } from '../author';
import { Character, SingleCharacter } from '../character';


@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

  keyword:string;
  searchModel = 'search-page';
  dataSource: MatTableDataSource<Search>;
  currPage = 1;
  totalPages = 2;
  searchList: Search[];
  
  constructor(private databaseService: DatabaseService, private stateService: StateService, private router: Router) { }


  searchHandler = {
    next: data => {
      let searchResults: SearchResults;
      searchResults = data;
      this.searchList = searchResults.results;
      this.dataSource = new MatTableDataSource<Search>(this.searchList);
      this.currPage = searchResults.page_num;
      this.totalPages = searchResults.pages_total;
    }
 };
 detailIssueHandler = {
  next: data => {
    let singleIssue: SingleIssue = data;
    let issue: Issue = singleIssue.results;
    this.stateService.setIssue(issue);
    this.router.navigateByUrl('/issue');
  }
};

detailAuthorHandler = {
  next: data => {
    let singleAuthor: SingleAuthor = data;
    let author: Author = singleAuthor.results;
    this.stateService.setAuthor(author);
    this.router.navigateByUrl('/author');
  }
};
detailCharacterHandler = {
  next: data => {
    let singleCharacter: SingleCharacter = data;
    let character: Character = singleCharacter.results;
    this.stateService.setCharacter(character);
    this.router.navigateByUrl('/character');
  }
};

  ngOnInit(): void {
    this.keyword = this.stateService.getKeyword();
    this.databaseService.getSearchTerm(this.keyword,1).subscribe(this.searchHandler);
  }

  searchTerm(value: Search) {
    if(value.type=='issue'){
      this.detailIssue(value.name);
    }
    if(value.type=='character'){
      this.detailCharacter(value.name);
    }
    if(value.type=='author'){
      this.detailAuthor(value.name);
    }


  }


detailIssue(issue: string){
      this.databaseService.getSingleIssue(issue).subscribe(this.detailIssueHandler);
    
  }

  detailAuthor(author: string){
      this.databaseService.getSingleAuthor(author).subscribe(this.detailAuthorHandler);
    }

    detailCharacter(character: string){
        this.databaseService.getSingleCharacter(character).subscribe(this.detailCharacterHandler);
    }
  backPage() {
    this.databaseService.getSearchTerm(this.keyword, this.currPage - 1).subscribe(this.searchHandler);
  }
 
  forwardPage() {
    this.databaseService.getSearchTerm(this.keyword, this.currPage + 1).subscribe(this.searchHandler);
  }

  search(value: string) {
    
  }

}
