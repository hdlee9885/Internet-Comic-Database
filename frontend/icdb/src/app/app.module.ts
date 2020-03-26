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
import { AuthorPreviewComponent } from './author-preview/author-preview.component';
import { IssuePreviewComponent } from './issue-preview/issue-preview.component';
import { CharacterPreviewComponent } from './character-preview/character-preview.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthorsComponent,
    CharactersComponent,
    IssuesComponent,
    SplashComponent,
    AboutComponent,
    DeveloperComponent,
    AuthorPreviewComponent,
    IssuePreviewComponent,
    CharacterPreviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
