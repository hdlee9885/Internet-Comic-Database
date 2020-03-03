import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorsComponent } from './authors/authors.component';
import { CharactersComponent } from './characters/characters.component';
import { IssuesComponent } from './issues/issues.component';
import { Page5Component } from './page5/page5.component';
import { Page6Component } from './page6/page6.component';
import { Page7Component } from './page7/page7.component';
import { Page8Component } from './page8/page8.component';
import { Page9Component } from './page9/page9.component';
import { Page10Component } from './page10/page10.component';
import { Page11Component } from './page11/page11.component';
import { Page12Component } from './page12/page12.component';
import { Page13Component } from './page13/page13.component';
import { Page14Component } from './page14/page14.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthorsComponent,
    CharactersComponent,
    IssuesComponent,
    Page5Component,
    Page6Component,
    Page7Component,
    Page8Component,
    Page9Component,
    Page10Component,
    Page11Component,
    Page12Component,
    Page13Component,
    Page14Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
