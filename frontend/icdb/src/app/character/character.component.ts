import { Component, OnInit } from '@angular/core';
import { Character } from '../character';
import { StateService } from '../state.service';
import { MatAccordion } from '@angular/material/expansion';
import { ViewChild } from '@angular/core'

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  @ViewChild('accordion',{static:true}) Accordion: MatAccordion;

  character: Character;

  constructor(private stateService: StateService) { }

  ngOnInit(): void {
    this.character = this.stateService.getCharacter();
  }

  closeAllPanels(){
    this.Accordion.closeAll();
	}
	openAllPanels(){
	    this.Accordion.openAll();
	}

}
