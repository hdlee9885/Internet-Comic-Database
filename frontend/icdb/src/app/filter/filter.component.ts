import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  applyingFilter = false;
  filter = '';
  filterValue = '';

  @Output() filtered = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  addFilter(filter: string) {
    this.filter = filter;
    this.applyingFilter = true;
    this.filtered.emit(filter);
  }

  deleteFilter() {
    this.filterValue = null;
    this.applyingFilter = false;
    this.filtered.emit('');
  }

}
