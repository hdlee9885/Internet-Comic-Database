import { Component, OnInit } from '@angular/core';
import { Author } from '../author';
import { StateService } from '../state.service';
import { DatabaseService } from '../database.service';


@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  author: Author;

  constructor(private stateService: StateService) { }

  ngOnInit(): void {
    this.author = this.stateService.getAuthor();
  }

}
