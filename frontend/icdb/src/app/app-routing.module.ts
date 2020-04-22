import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthorsComponent } from './authors/authors.component';
import { CharactersComponent } from './characters/characters.component';
import { IssuesComponent } from './issues/issues.component';
import { SplashComponent} from './splash/splash.component';
import { AboutComponent} from './about/about.component';
import { AuthorComponent } from './author/author.component';
import { CharacterComponent } from './character/character.component';
import { IssueComponent } from './issue/issue.component';
import { SearchPageComponent } from './search-page/search-page.component';


const routes: Routes = [
  { path: 'author', component: AuthorComponent },
  { path: 'character', component: CharacterComponent },
  { path: 'issue', component: IssueComponent },
  { path: 'authors', component: AuthorsComponent },
  { path: 'characters', component: CharactersComponent },
  { path: 'issues', component: IssuesComponent },
  { path: 'splash', component: SplashComponent},
  { path: 'about', component: AboutComponent},
  { path: '', redirectTo: 'splash', pathMatch: 'full' },
  { path: 'search-page', component: SearchPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
