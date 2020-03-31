import { Component, OnInit } from '@angular/core';
import { Author } from '../author';
import { StateService } from '../state.service';
import { MatAccordion } from '@angular/material/expansion';
import { ViewChild } from '@angular/core'

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  @ViewChild('accordion', {static:true}) Accordion: MatAccordion;

  author: Author;

  constructor(private stateService: StateService) { }

  ngOnInit(): void {
    this.author = this.stateService.getAuthor();
  }
  
  closeAllPanels(){
    this.Accordion.closeAll();
	}
	openAllPanels(){
    this.Accordion.openAll();
	}

}
