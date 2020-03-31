import { Component, OnInit } from '@angular/core';
import { Author } from '../author';
import { Issue, SingleIssue } from '../issue';
import { Character, SingleCharacter } from '../character';
import { StateService } from '../state.service';
import { DatabaseService } from '../database.service';
import { ListingPage } from '../listing-page';
import { MatAccordion } from '@angular/material/expansion';
import { ViewChild } from '@angular/core'
import { Router } from '@angular/router';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  @ViewChild('accordion', {static:true}) Accordion: MatAccordion;

  author: Author;

  availIssues: string[];
  availCharacters: string[];

  constructor(private stateService: StateService, private databaseService: DatabaseService, private router: Router) { }

  availIssuesHandler = {
    next: data => {
      let issueNames: ListingPage;
      issueNames = data;
      this.availIssues = issueNames.Result;
    }
  };

  availCharactersHandler = {
    next: data => {
      let characterNames: ListingPage;
      characterNames = data;
      this.availCharacters = characterNames.Result;
      console.log(this.availCharacters);
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

  detailCharacterHandler = {
    next: data => {
      let singleCharacter: SingleCharacter = data;
      let character: Character = singleCharacter.results;
      this.stateService.setCharacter(character);
      this.router.navigateByUrl('/character');
    }
  };

  ngOnInit(): void {
    this.author = this.stateService.getAuthor();
    this.databaseService.getIssueNames().subscribe(this.availIssuesHandler);
    this.databaseService.getCharacterNames().subscribe(this.availCharactersHandler);
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

  detailCharacter(character: string){
    if(this.availCharacters.indexOf(character) != -1){
      this.databaseService.getSingleCharacter(character).subscribe(this.detailCharacterHandler);
    }else{
      alert('Unfortunately, we do not have any data on the character ' + character + '. :(');
    }

  }

}
