import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button'
import {MatTableModule} from '@angular/material/table'
import {MatPaginatorModule} from '@angular/material/paginator'
import { MatCardModule } from '@angular/material/card'
import { MatListModule }  from '@angular/material/list'
import {MatExpansionModule} from '@angular/material/expansion';




const MaterialComponents=[
  MatButtonModule,
  MatTableModule,
  MatPaginatorModule,
  MatCardModule,
  MatListModule,
  MatExpansionModule

  //NgModule

]

@NgModule({
  
  imports: [MaterialComponents],
   exports: [MaterialComponents]
})
export class MaterialModule { }
