import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthorsComponent } from './authors/authors.component';
import { CharactersComponent } from './characters/characters.component';
import { IssuesComponent } from './issues/issues.component';
import { SplashComponent} from './splash/splash.component';
import { AboutComponent} from './about/about.component';

const routes: Routes = [
  { path: 'authors', component: AuthorsComponent },
  { path: 'characters', component: CharactersComponent },
  { path: 'issues', component: IssuesComponent },
  { path: 'splash', component: SplashComponent},
  { path: 'about', component: AboutComponent},
  { path: '', redirectTo: 'splash', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
