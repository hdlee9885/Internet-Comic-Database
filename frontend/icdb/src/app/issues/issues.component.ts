import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { Issue } from '../issue';
import { IssuePage } from '../issue-page';
import { DatabaseService } from '../database.service';
import { StateService } from '../state.service';

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.css']
})
export class IssuesComponent implements OnInit {
  displayedColumns: string[] = ['Title', 'Cover Date', 'Main Character', 'Author'];
  dataSource: MatTableDataSource<Issue>;

  issues: Issue[];
  currPage = 1;
  totalPages = 2;
  
  searchModel = 'issues';

  filter = '';
  sortA ='';

  constructor(private databaseService: DatabaseService, private stateService: StateService, private router: Router) { }

  issuesHandler = {
    next: data => {
      let issuePage: IssuePage;
      issuePage = data;
      this.issues = issuePage.results;
      this.dataSource = new MatTableDataSource<Issue>(this.issues);
      this.currPage = issuePage.page_num;
      this.totalPages = issuePage.pages_total;
    }
  };

  backPage() {
    this.databaseService.getIssues(this.currPage - 1, this.filter,this.sortA).subscribe(this.issuesHandler);
  }

  forwardPage() {
    this.databaseService.getIssues(this.currPage + 1, this.filter,this.sortA).subscribe(this.issuesHandler);
  }

  detailIssue(row: Issue){
    this.stateService.setIssue(row);
    this.router.navigateByUrl('/issue');
  }

  ngOnInit() {
    this.databaseService.getIssues(1, this.filter,this.sortA).subscribe(this.issuesHandler);
  }

  search(value: string) {
	this.router.navigateByUrl('search-page');
  }

  applyFilter(filter: string) {
    this.filter = filter;
    this.databaseService.getIssues(this.currPage, filter,this.sortA).subscribe(this.issuesHandler);
  }

  SortAZ(){
     this.sortA='True';
    this.databaseService.getIssues(this.currPage,this.filter,this.sortA).subscribe(this.issuesHandler);
  }
  SortZA(){
    this.sortA='False';
    this.databaseService.getIssues(this.currPage,this.filter,this.sortA).subscribe(this.issuesHandler);
  }
}
