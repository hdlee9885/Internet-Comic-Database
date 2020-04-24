import { Component, OnInit } from '@angular/core';
import { Issue } from '../issue';
import { MatAccordion } from '@angular/material/expansion';
import { ViewChild } from '@angular/core'
import { StateService } from '../state.service';
import { DatabaseService } from '../database.service';
import { Router } from '@angular/router';
import {ListingPage} from '../listing-page'
import { generate } from 'rxjs';
import { IssuesComponent } from '../issues/issues.component';
import { Character, SingleCharacter } from '../character';
import { Author, SingleAuthor } from '../author';
import { CharacterPage } from '../character-page';
@Component({
  selector: 'app-issue',
  templateUrl: './issue.component.html',
  styleUrls: ['./issue.component.css']
})
export class IssueComponent implements OnInit {

  panelOpenState = false;
  @ViewChild('accordion', {static:true}) Accordion: MatAccordion;

  panelCharOpenState=false;
  panelAuthorOpenState =false;
  searchModel="issue-search-nav"
  issue: Issue;
  availAuthors: string[];
  availCharacters: string[];

  constructor(private databaseService: DatabaseService, private stateService: StateService, private router: Router) { }
  availAuthorsHandler = {
    next: data => {
      let authorNames: ListingPage;
      authorNames = data;
      this.availAuthors = authorNames.Result;
      console.log(this.availAuthors);
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
    this.issue = this.stateService.getIssue();
    if(this.issue == undefined){
      this.router.navigateByUrl('/issues');
    }
    this.databaseService.getAuthorNames().subscribe(this.availAuthorsHandler);
    this.databaseService.getCharacterNames().subscribe(this.availCharactersHandler);
  }

  closeAllPanels(){
    this.Accordion.closeAll();
	}
	openAllPanels(){
    this.Accordion.openAll();
  }

  detailAuthor(author: string){
    let finalAuthor = this.formatCreator(author);
    console.log(finalAuthor);
    if(this.availAuthors.indexOf(finalAuthor) != -1){
      this.databaseService.getSingleAuthor(finalAuthor).subscribe(this.detailAuthorHandler);
    }else{
      alert('Unfortunately, we do not have any data on the comic author ' + finalAuthor + '. :(');
    }
  }

  formatCreator(creator: string):string{
    var index =creator.indexOf(":");

      let correctAuthorString=creator.substring(0,index);

     return correctAuthorString;


  }

  detailCharacter(character: string){
    if(this.availCharacters.indexOf(character) != -1){
      this.databaseService.getSingleCharacter(character).subscribe(this.detailCharacterHandler);
    }else{
      alert('Unfortunately, we do not have any data on the character ' + character + '. :(');
    }

  }
  search(value: string) {
    this.router.navigateByUrl('/search-page');
  }
}
