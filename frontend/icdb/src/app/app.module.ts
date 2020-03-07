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
import { Author1Component } from './author1/author1.component';
import { Author2Component } from './author2/author2.component';
import { Author3Component } from './author3/author3.component';
import { Character1Component } from './character1/character1.component';
import { Character2Component } from './character2/character2.component';
import { Character3Component } from './character3/character3.component';
import { Issue1Component } from './issue1/issue1.component';
import { Issue2Component } from './issue2/issue2.component';
import { Issue3Component } from './issue3/issue3.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthorsComponent,
    CharactersComponent,
    IssuesComponent,
    SplashComponent,
    AboutComponent,
    Author1Component,
    Author2Component,
    Author3Component,
    Character1Component,
    Character2Component,
    Character3Component,
    Issue1Component,
    Issue2Component,
    Issue3Component
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
