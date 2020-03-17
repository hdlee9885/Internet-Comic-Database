import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthorsComponent } from './authors/authors.component';
import { CharactersComponent } from './characters/characters.component';
import { IssuesComponent } from './issues/issues.component';
import { SplashComponent} from './splash/splash.component';
import { Author1Component} from './author1/author1.component';
import { Author2Component} from './author2/author2.component';
import { Author3Component} from './author3/author3.component';
import { Character1Component} from './character1/character1.component';
import { Character2Component} from './character2/character2.component';
import { Character3Component} from './character3/character3.component';
import { Issue1Component} from './issue1/issue1.component';
import { Issue2Component} from './issue2/issue2.component';
import { Issue3Component} from './issue3/issue3.component';
import { AboutComponent} from './about/about.component';

const routes: Routes = [
  { path: 'authors', component: AuthorsComponent },
  { path: 'characters', component: CharactersComponent },
  { path: 'issues', component: IssuesComponent },
  { path: 'splash', component: SplashComponent},
  { path: 'authors/author1', component: Author1Component},
  { path: 'authors/author2', component: Author2Component},
  { path: 'authors/author3', component: Author3Component},
  { path: 'characters/character1', component: Character1Component},
  { path: 'characters/character2', component: Character2Component},
  { path: 'characters/character3', component: Character3Component},
  { path: 'issues/issue1', component: Issue1Component},
  { path: 'issues/issue2', component: Issue2Component},
  { path: 'issues/issue3', component: Issue3Component},
  { path: 'about', component: AboutComponent},
  { path: '', redirectTo: 'splash', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
