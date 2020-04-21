import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  @Input() model: string;
  @Output() searched = new EventEmitter();

  searchValue = '';

  constructor() { }

  ngOnInit(): void {
  }

  search(value: string): void {
    this.searched.emit(value);
    this.searchValue = null;
  }

}
