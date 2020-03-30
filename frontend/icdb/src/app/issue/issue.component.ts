import { Component, OnInit } from '@angular/core';
import { Issue } from '../issue';
import { StateService } from '../state.service';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatAccordion } from '@angular/material/expansion';
import { ViewChild } from '@angular/core'

@Component({
  selector: 'app-issue',
  templateUrl: './issue.component.html',
  styleUrls: ['./issue.component.css']
})
export class IssueComponent implements OnInit {

  @ViewChild('accordion',{static:true}) Accordion: MatAccordion

  issue: Issue;

  constructor(private stateService: StateService) { }

  ngOnInit(): void {
    this.issue = this.stateService.getIssue();
  }

  closeAllPanels(){
    this.Accordion.closeAll();
	}
	openAllPanels(){
	    this.Accordion.openAll();
	}
}
