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

  search(value: string): void {
    this.searched.emit(value);
    this.searchValue = null;
    this.stateService.setKeyword(value);
    this.router.navigateByUrl('/search-page');
  }

}
