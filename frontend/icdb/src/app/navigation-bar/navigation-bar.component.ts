import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

  @Output() searched = new EventEmitter();

  searchType = 'all';
  constructor() { }

  ngOnInit(): void {
  }

  search(value: string) {
    this.searched.emit(value);
}
}
