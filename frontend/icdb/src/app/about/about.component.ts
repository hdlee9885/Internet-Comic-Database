import { Component, OnInit } from '@angular/core';
import { AboutService } from '../about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent implements OnInit {

  commits = {
    jacob: 0,
    chris: 0,
    jerad: 0,
    william: 0,
    haosong: 0,
    josh: 0
  };

  issues = {
    jacob: 0,
    chris: 0,
    jerad: 0,
    william: 0,
    haosong: 0,
    josh: 0
  };

  numIssues = 0;

  statsHandler = {
    next: data => {
      let contributor;
      for (contributor of data) {
        this.numIssues++;
        switch (contributor.author.login) {
          case 'jacobgrimm':
            this.commits.jacob = contributor.total;
            break;
          case 'Minalinnski':
            this.commits.william = contributor.total;
            break;
          case 'chrisjoswin':
            this.commits.chris = contributor.total;
            break;
          case 'JSRobles':
            this.commits.jerad = contributor.total;
            break;
          case 'hdlee9885':
            this.commits.haosong = contributor.total;
            break;
          case 'Haosong Li':
          	this.commits.haosong = contributor.total;
          	break;
          case 'j-ka11':
            this.commits.josh = contributor.total;
            break;
        }
      }
    }

  };

  issuesHandler = {
    next: data => {
      let issue;
      for (issue of data) {
        switch (issue.user.login) {
          case 'jacobgrimm':
            this.issues.jacob++;
            break;
          case 'Minalinnski':
            this.issues.william++;
            break;
          case 'chrisjoswin':
            this.issues.chris++;
            break;
          case 'JSRobles':
            this.issues.jerad++;
            break;
          case 'hdlee9885':
            this.issues.haosong++;
            break;
          case 'j-ka11':
            this.issues.josh++;
            break;
        }
      }
    }
  };

  constructor(private aboutService: AboutService) { }

  ngOnInit(): void {
    this.aboutService.getStats().subscribe(this.statsHandler);
    this.aboutService.getIssues().subscribe(this.issuesHandler);
  }
}


