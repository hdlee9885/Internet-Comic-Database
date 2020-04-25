import { Component, OnInit } from '@angular/core';
import { AboutService } from '../about.service';
import { Developer } from '../developer';
import { Stats } from '../stats';
import { Issues } from '../issues';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent implements OnInit {

  blankPhoto = '../../assets/photo/Avatar.png';
  JacobPhoto = '../../assets/photo/Jacob.jpg';
  JoshPhoto = '../../assets/photo/Josh.PNG';
  ChrisPhoto = '../../assets/photo/Chris.jpg';
  HaosongPhoto = '../../assets/photo/Haosong.jpeg';
  WillPhoto = '../../assets/photo/William.png';
  SebPhoto = '../../assets/photo/Seb.JPG';

  developers: Developer[] = [
    // tslint:disable-next-line:max-line-length
    {name: 'Christopher Erattuparambil', photoUrl: this.ChrisPhoto, bio: 'Chris is a Junior at UT studying ECE with his tech core as Software Design. In his free time he likes going outside and watching sports.', track: 'Software Engineering and Design', team: 'Frontend Team', numIssues: 0, numCommits: 0, numTests: 15},
    {name: 'Josh Kall', photoUrl: this.JoshPhoto, bio: 'Josh is currently a Junior at UT Austin, he likes to cook, and likes to play Smash. He will be interning at Google in Summer 2020.', track: 'Software Engineering and Design', team: 'Frontend Team', numIssues: 0, numCommits: 0, numTests: 29},
    {name: 'Haosong Li', photoUrl: this.HaosongPhoto, bio: 'Haosong is a Senior ECE student at UT on software track. He likes traveling during holidays and likes playing basketball.', track: 'Software Engineering and Design', team: 'Frontend Team', numIssues: 0, numCommits: 0, numTests: 24},
    {name: 'Jacob Grimm', photoUrl: this.JacobPhoto, bio: 'Jacob is currently a Junior at UT Austin, he is super cool and likes to play Fortnite.', track: 'Software Engineering and Design', team: 'Backend Team', numIssues: 0, numCommits: 0, numTests: 5},
    {name: 'Sebastian Robles', photoUrl: this.SebPhoto, bio: 'Sebastian is currently a Senior at UT Austin, an active member of the Maker movement and a huge fan of Star Wars and comics. He will begin working for Visa Inc. in September.', track: 'Embedded Systems and Computer Architecture', team: 'Backend Team', numIssues: 0, numCommits: 0, numTests: 5},
    {name: 'William Gu', photoUrl: this.WillPhoto, bio: 'William is currently a junior student at UT Austin, he is a great fan of anime and League of Legend.', track: 'Software Engineering and Design', team: 'Backend Team', numIssues: 0, numCommits: 0, numTests: 6},
  ];

  numCommits = 0;
  numIssues = 0;

  statsHandler = {
    next: data => {
      if(data.length > 0) {
        let contributor: Stats;
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
      }else{
        this.aboutService.getStats().subscribe(this.statsHandler);
      }
    }
  };

  issuesHandler = {
    next: data => {
      if(data.length > 0) {
        let issue: Issues;
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
              this.developers[1].numIssues++;
              break;
          }
        }
      }else{
        this.aboutService.getIssues().subscribe(this.issuesHandler);
      }
    }
  };

  constructor(private aboutService: AboutService) { }

  ngOnInit(): void {
    this.aboutService.getStats().subscribe(this.statsHandler);
    this.aboutService.getIssues().subscribe(this.issuesHandler);
  }
}


