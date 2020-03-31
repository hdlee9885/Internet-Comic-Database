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
import { Character } from '../character';
import { CharacterPage } from '../character-page';
@Component({
  selector: 'app-issue',
  templateUrl: './issue.component.html',
  styleUrls: ['./issue.component.css']
})
export class IssueComponent implements OnInit {

  @ViewChild('accordion', {static:true}) Accordion: MatAccordion;

  captPlanet = <Character> {
    aliases: "Test" ,
  alignment:"good",
  api_detail_url: "hi",
  appearance: null,
  creators: ['Apple', 'Orange', 'Banana'],
  deck: "hello",
  description: "tall",
  first_appeared_in_issue: "firstone",
  image: "inamge",
  name: "Captain Planet",
  real_name: "Captain"
}
  issue: Issue;
  charactersList: string[];
  authorsList: string[];
  clickableCharacters: string[] =["Captain Planet"];
  clickableAuthors: string[];
  fullListCharacters:Character[] =[ this.captPlanet];


   fruits: string[] = ['Apple', 'Orange', 'Banana'];


  constructor(private databaseService: DatabaseService, private stateService: StateService, private router: Router) { }
  issueAuthorsHandler = {
    next: data => {
      let listingPage: ListingPage;
      listingPage = data;
      this.authorsList = listingPage.Result;
    }
  };

  issueCharactersHandler = {
    next: data => {
      let listingPage: ListingPage;
      listingPage = data;
      this.charactersList = listingPage.Result;

    }
  };

  issueFullCharactersHandler={
    next: data => {
      let characterPage: CharacterPage;
      characterPage = data;
      for(let character of characterPage.results)
      this.fullListCharacters.push(character);
      this.generateCharacterLinks();
  }
};




  ngOnInit(): void {
    this.issue = this.stateService.getIssue();
    this.databaseService.getAuthorNames().subscribe(this.issueAuthorsHandler);
    this.databaseService.getCharacterNames().subscribe(this.issueCharactersHandler);
    this.databaseService.getCharacters(1).subscribe(this.issueFullCharactersHandler);
    this.databaseService.getCharacters(2).subscribe(this.issueFullCharactersHandler);
    this.databaseService.getCharacters(3).subscribe(this.issueFullCharactersHandler);
    this.databaseService.getCharacters(4).subscribe(this.issueFullCharactersHandler);


  }

  closeAllPanels(){
    this.Accordion.closeAll();
	}
	openAllPanels(){
    this.Accordion.openAll();
  }

  generateCharacterLinks(){
    for(let character of this.issue.character_credits){
      if(this.charactersList.includes(character)){
          this.clickableCharacters.push(character);
      }
    }

  }
  generateAuthorLinks(authorName){

  }

  navCharacterClick(element){
   if(this.clickableCharacters.includes(element)){
     //pull character from database
     for(var character of this.fullListCharacters){
       if((character.name)===element){
        this.stateService.setCharacter(character);
        this.router.navigateByUrl('/character');
       }
      }
    }
   else
     {
     alert(element + " does not have a detailed page");
     }

   }

}
