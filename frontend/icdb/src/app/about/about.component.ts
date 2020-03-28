import { Component, OnInit } from '@angular/core';
import { AboutService } from '../about.service';
import { Developer } from '../developer';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent implements OnInit {

  blankPhoto = 'https://www.kindpng.com/picc/m/22-223965_no-profile-picture-icon-circle-member-icon-png.png';

  developers: Developer[] = [
    // tslint:disable-next-line:max-line-length
    {name: 'Christopher Erattuparambil', photoUrl: this.blankPhoto, bio: '', track: '', team: 'Frontend Team', numIssues: 0, numCommits: 0, numTests: 0},
    {name: 'Josh Kall', photoUrl: this.blankPhoto, bio: '', track: '', team: 'Frontend Team', numIssues: 0, numCommits: 0, numTests: 0},
    {name: 'Haosong Li', photoUrl: this.blankPhoto, bio: '', track: '', team: 'Frontend Team', numIssues: 0, numCommits: 0, numTests: 0},
    {name: 'Jacob Grimm', photoUrl: this.blankPhoto, bio: '', track: '', team: 'Backend Team', numIssues: 0, numCommits: 0, numTests: 0},
    {name: 'Jerad Robles', photoUrl: this.blankPhoto, bio: '', track: '', team: 'Backend Team', numIssues: 0, numCommits: 0, numTests: 0},
    {name: 'William Gu', photoUrl: this.blankPhoto, bio: '', track: '', team: 'Backend Team', numIssues: 0, numCommits: 0, numTests: 0},
  ];

  numCommits = 0;
  numIssues = 0;

  statsHandler = {
    next: data => {
      let contributor;
      for (contributor of data) {
        this.numCommits += contributor.total;
        switch (contributor.author.login) {
          case 'jacobgrimm':
            this.developers[3].numCommits = contributor.total;
            break;
          case 'Minalinnski':
            this.developers[5].numCommits = contributor.total;
            break;
          case 'chrisjoswin':
            this.developers[0].numCommits = contributor.total;
            break;
          case 'JSRobles':
            this.developers[4].numCommits = contributor.total;
            break;
          case 'hdlee9885':
            this.developers[2].numCommits = contributor.total;
            break;
          case 'j-ka11':
            this.developers[1].numCommits = contributor.total;
            break;
        }
      }
    }

  };

  issuesHandler = {
    next: data => {
      let issue;
      for (issue of data) {
        this.numIssues++;
        switch (issue.user.login) {
          case 'jacobgrimm':
            this.developers[3].numIssues++;
            break;
          case 'Minalinnski':
            this.developers[5].numIssues++;
            break;
          case 'chrisjoswin':
            this.developers[0].numIssues++;
            break;
          case 'JSRobles':
            this.developers[4].numIssues++;
            break;
          case 'hdlee9885':
            this.developers[2].numIssues++;
            break;
          case 'j-ka11':
            this.developers[0].numIssues++;
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


