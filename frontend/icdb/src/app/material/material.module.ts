import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button'
import {MatTableModule} from '@angular/material/table'
import {MatPaginatorModule} from '@angular/material/paginator'




const MaterialComponents=[
  MatButtonModule,
  MatTableModule,
  MatPaginatorModule

  //NgModule

]

@NgModule({
  
  imports: [MaterialComponents],
   exports: [MaterialComponents]
})
export class MaterialModule { }
