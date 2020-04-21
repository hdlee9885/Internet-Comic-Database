import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorsComponent } from './authors/authors.component';
import { CharactersComponent } from './characters/characters.component';
import { IssuesComponent } from './issues/issues.component';
import { SplashComponent } from './splash/splash.component';
import { AboutComponent } from './about/about.component';
import { DeveloperComponent } from './developer/developer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { CharacterComponent } from './character/character.component';
import { AuthorComponent } from './author/author.component';
import { IssueComponent } from './issue/issue.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { FilterComponent } from './filter/filter.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthorsComponent,
    CharactersComponent,
    IssuesComponent,
    SplashComponent,
    AboutComponent,
    DeveloperComponent,
    CharacterComponent,
    AuthorComponent,
    IssueComponent,
    SearchBarComponent,
    FilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
