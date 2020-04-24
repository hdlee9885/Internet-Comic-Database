import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
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

  searchModel = 'characters';

  filter = '';

  constructor(private databaseService: DatabaseService, private stateService: StateService, private router: Router, private cd: ChangeDetectorRef) { }

  charactersHandler = {
    next: data => {
      let characterPage: CharacterPage;
      characterPage = data;
      this.characters = characterPage.results;
      this.dataSource = new MatTableDataSource<Character>(this.characters);
      this.currPage = characterPage.page_num;
      this.totalPages = characterPage.pages_total;
      this.cd.detectChanges();
    }
  };

  backPage() {
    this.databaseService.getCharacters(this.currPage - 1, this.filter).subscribe(this.charactersHandler);
  }

  forwardPage() {
    this.databaseService.getCharacters(this.currPage + 1, this.filter).subscribe(this.charactersHandler);
  }

  detailCharacter(row: Character) {
    this.stateService.setCharacter(row);
    this.router.navigateByUrl('/character');
  }

  ngOnInit(): void {
    this.databaseService.getCharacters(1, '').subscribe(this.charactersHandler);
  }

  search(value: string) {
      this.router.navigateByUrl('/search-bar');
  }

  applyFilter(filter: string) {
    this.filter = filter;
    this.databaseService.getCharacters(this.currPage, filter).subscribe(this.charactersHandler);
  }

  SortAZ(){

  }
  SortZA(){

  }
}
