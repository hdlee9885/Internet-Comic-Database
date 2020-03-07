import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

@Injectable()
export class AboutComponent implements OnInit {
  github_json;
  github_issue;
  total;
  author = [];
  jacob;
  chris;
  jerad;
  william;
  haosong;
  josh;
  issue;
  numOfIssue;
  
  headerDict = {
	  'Content-Type': 'application/json',
	  'Accept': 'application/json',
	  'Access-Control-Allow-Headers': 'Content-Type',	  
	  'Access-Control-Allow-Origin': '*',  
	}
	requestOptions = {                                                                                                                                                                                 
	  headers: new HttpHeaders(this.headerDict), 
	};
  
  
  constructor(private http: HttpClient) { 
  }

  ngOnInit(): void {
     this.github_json = this.http.get<any>('https://api.github.com/repos/chrisjoswin/EE461L_Project/stats/contributors').subscribe(data => {
     	this.jacob = data[0];
     	console.log(this.jacob);
		this.chris = data[1];
		this.jerad = data[2];
		this.william = data[3];
		this.haosong = data[4];
		this.josh = data[5];
		     	
		     	
     });
 	 this.github_issue = this.http.get<any>('https://api.github.com/repos/chrisjoswin/EE461L_Project/issues').subscribe(data => {
 	 	this.numOfIssue = data[0];
 	 });
  }
  
  ngAfterViewChecked(){
  	console.log(this.github_json);
  }

}
