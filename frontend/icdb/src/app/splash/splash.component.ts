import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';
import { StateService } from '../state.service';
import { Character, SingleCharacter } from '../character';
import { Router } from '@angular/router';
@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.css']
})
export class SplashComponent implements OnInit {

  searchType = 'all';

  constructor(private stateService: StateService, private databaseService: DatabaseService, private router: Router) { }

  detailCharacterHandler = {
    next: data => {
      let singleCharacter: SingleCharacter = data;
      let character: Character = singleCharacter.results;
      this.stateService.setCharacter(character);
      this.router.navigateByUrl('/character');
    }
  };
  ngOnInit(): void {
  }

  search(value) {
      this.router.navigateByUrl('/search-page')
  }


  carouselClick(character: string) {
        this.databaseService.getSingleCharacter(character).subscribe(this.detailCharacterHandler);
    }
  }
