import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css']
})
export class DeveloperComponent implements OnInit {

  constructor() { }

  @Input() name: string;
  @Input() photoUrl: string;
  @Input() bio: string;
  @Input() track: string;
  @Input() team: string;
  @Input() numCommits: number;
  @Input() numIssues: number;
  @Input() numTests: number;

  ngOnInit(): void {
  }

}
