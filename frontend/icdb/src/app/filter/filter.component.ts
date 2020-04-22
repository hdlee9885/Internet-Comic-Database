import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  applyingFilters = false;
  filters = [];

  constructor() { }

  ngOnInit(): void {
  }

  addFilter(filter: string) {
    this.filters.push(filter);
    this.applyingFilters = true;
    //need to actually filter the data
    //database call
    
  }

}
