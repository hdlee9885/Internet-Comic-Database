import { Component, OnInit } from '@angular/core';
import { Issue } from '../issue';
import { StateService } from '../state.service';

@Component({
  selector: 'app-issue',
  templateUrl: './issue.component.html',
  styleUrls: ['./issue.component.css']
})
export class IssueComponent implements OnInit {

  issue: Issue;

  constructor(private stateService: StateService) { }

  ngOnInit(): void {
    this.issue = this.stateService.getIssue();
  }

}
