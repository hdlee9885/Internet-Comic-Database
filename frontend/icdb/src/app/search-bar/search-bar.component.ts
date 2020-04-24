import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { StateService } from '../state.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  @Input() model: string;
  @Output() searched = new EventEmitter();

  searchValue = '';

  constructor(private stateService: StateService,private router: Router) { }

  ngOnInit(): void {
  }

  search(event, value: string): void {
    console.log('hello');
    event.preventDefault();
    this.stateService.setKeyword(value);
    this.searched.emit(value);
    this.searchValue = null;
    

    
  }

 

}
