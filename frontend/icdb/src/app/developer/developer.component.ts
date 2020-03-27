import {Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Developer } from '../developer';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css']
})
export class DeveloperComponent implements OnInit {

  constructor() { }

  @Input() info: Developer;

  ngOnInit(): void {
  }

}
