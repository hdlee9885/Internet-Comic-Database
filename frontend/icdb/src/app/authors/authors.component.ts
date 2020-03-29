import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  constructor(private databaseService: DatabaseService) { }

  authorsHandler = {
    next: data => {
      console.log(data);
    }
  };

  ngOnInit(): void {
    this.databaseService.getAuthors(1).subscribe(this.authorsHandler);
  }


}

