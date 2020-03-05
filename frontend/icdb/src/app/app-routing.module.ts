import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthorsComponent } from './authors/authors.component';
import { CharactersComponent } from './characters/characters.component';
import { IssuesComponent } from './issues/issues.component';

const routes: Routes = [
  { path: 'authors', component: AuthorsComponent },
  { path: 'characters', component: CharactersComponent },
  { path: 'issues', component: IssuesComponent },
  { path: '', redirectTo: 'authors', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
