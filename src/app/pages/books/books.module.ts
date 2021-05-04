import { NgModule } from '@angular/core';
import { BooksComponent } from './books.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    BooksComponent
  ],
  imports: [
    SharedModule
  ]
})
export class BooksModule { }
