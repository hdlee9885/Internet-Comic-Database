import { Component, OnInit } from '@angular/core';
import { Character } from '../character';
import { StateService } from '../state.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  character: Character;

  constructor(private stateService: StateService) { }

  ngOnInit(): void {
    this.character = this.stateService.getCharacter();
  }

}
