import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  @Input() model: string;
  @Output() searched = new EventEmitter();

  placeholder: string;
  searchValue = '';

  constructor() { }

  ngOnInit(): void {
    switch (this.model) {
      case 'all':
        this.placeholder = 'Search all instances';
        break;
      case 'characters':
        this.placeholder = 'Search characters';
        break;
      case 'authors':
        this.placeholder = 'Search authors';
        break;
      case 'issues':
        this.placeholder = 'Search issues';
        break;
      default:
        this.placeholder = 'Search all instances';
        break;
    }
  }

  search(value: string): void {
    this.searched.emit(value);
    this.searchValue = null;
  }

}
