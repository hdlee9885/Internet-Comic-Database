import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';
import { StateService } from '../state.service';
import { Character, SingleCharacter } from '../character';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {


  searchType = 'all';
  constructor(private stateService: StateService, private databaseService: DatabaseService, private router: Router) { }

  ngOnInit(): void {
  }

  search(value: string) {
    this.router.navigateByUrl('/search-page')
}
}
