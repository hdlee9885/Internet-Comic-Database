import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { Character } from '../character';
import { CharacterPage } from '../character-page';
import { DatabaseService } from '../database.service';
import { StateService } from '../state.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  displayedColumns = ['Character', 'Real Name', 'First Appeared In', 'Created By'];
  dataSource: MatTableDataSource<Character>;

  characters: Character[];
  currPage = 1;
  totalPages = 2;

  constructor(private databaseService: DatabaseService, private stateService: StateService, private router: Router) { }

  charactersHandler = {
    next: data => {
      let characterPage: CharacterPage;
      characterPage = data;
      this.characters = characterPage.results;
      this.dataSource = new MatTableDataSource<Character>(this.characters);
      this.currPage = characterPage.page_num;
      this.totalPages = characterPage.pages_total;
    }
  };

  backPage() {
    this.databaseService.getCharacters(this.currPage - 1).subscribe(this.charactersHandler);
  }

  forwardPage() {
    this.databaseService.getCharacters(this.currPage + 1).subscribe(this.charactersHandler);
  }

  detailCharacter(row: Character) {
    this.stateService.setCharacter(row);
    this.router.navigateByUrl('/character');
  }

  ngOnInit(): void {
    console.log('hello');
    this.databaseService.getCharacters(1).subscribe(this.charactersHandler);
  }

}
