import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button'
import {MatTableModule} from '@angular/material/table'
import {MatPaginatorModule} from '@angular/material/paginator'
import { MatCardModule } from '@angular/material/card'
import { MatListModule }  from '@angular/material/list'
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatGridListModule} from '@angular/material/grid-list';






const MaterialComponents=[
  MatButtonModule,
  MatTableModule,
  MatPaginatorModule,
  MatCardModule,
  MatListModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatGridListModule


  //NgModule

]

@NgModule({
  
  imports: [MaterialComponents],
   exports: [MaterialComponents]
})
export class MaterialModule { }
