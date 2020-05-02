import { Component, OnInit } from '@angular/core';
import { Character } from '../character';
import { StateService } from '../state.service';
import { MatAccordion } from '@angular/material/expansion';
import { ViewChild } from '@angular/core'
import { ListingPage } from '../listing-page';
import { Issue, SingleIssue } from '../issue';
import { Author, SingleAuthor } from '../author';
import { Router } from '@angular/router';
import { DatabaseService } from '../database.service';


@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {


  searchModel="character-search-nav"
  panelIssueOpenState=false;
  panelAuthorOpenState =false;
  @ViewChild('accordion',{static:true}) Accordion: MatAccordion;

  character: Character;

  availIssues: string[];
  availAuthors: string[];

  constructor(private databaseService: DatabaseService, private stateService: StateService, private router: Router ) {

  }


  availIssuesHandler = {
    next: data => {
      let issueNames: ListingPage;
      issueNames = data;
      this.availIssues = issueNames.Result;
    }
  };

  availAuthorsHandler = {
    next: data => {
      let authorNames: ListingPage;
      authorNames = data;
      this.availAuthors = authorNames.Result;
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

  ngOnInit(): void {
    this.character = this.stateService.getCharacter();
    if(this.character == undefined) {
      this.router.navigateByUrl('/characters');
    }
    this.databaseService.getIssueNames().subscribe(this.availIssuesHandler);
    this.databaseService.getAuthorNames().subscribe(this.availAuthorsHandler);

  }

  closeAllPanels(){
    this.Accordion.closeAll();
	}
	openAllPanels(){
	    this.Accordion.openAll();
	}


  detailIssue(issue: string){
    if(this.availIssues.indexOf(issue) != -1){
      this.databaseService.getSingleIssue(issue).subscribe(this.detailIssueHandler);
    }else{
      alert('Unfortunately, we do not have any data on the comic issue ' + issue + '. :(');
    }
  }

  detailAuthor(author: string){
    console.log(author);
    let finalAuthor=author;
    console.log(finalAuthor);
    if(this.availAuthors.indexOf(finalAuthor) != -1){
      this.databaseService.getSingleAuthor(finalAuthor).subscribe(this.detailAuthorHandler);
    }else{
      alert('Unfortunately, we do not have any data on the comic author ' + finalAuthor + '. :(');
    }
  }

  formatCreator(creator: string):string{
    console.log('in format Creator'+creator);
    var index =creator.indexOf(":");

      let correctAuthorString=creator.substring(0,index);

     return correctAuthorString;


  }

  formatRelatedIssues(){
    if(this.character.issues.includes(";")||this.character.issues.includes("/")){
      var splitted = this.character.issues[0].split("; ", 3);
      this.character.first_appeared_in_issue=splitted[0];
      this.character.issues=splitted;
      console.log(splitted)
    }

  }

  search(value) {
    this.router.navigateByUrl('/search-page');
  }
}
