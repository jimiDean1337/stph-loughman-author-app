import { NgModule } from '@angular/core';
import { BookDetailsComponent } from './book-details.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    BookDetailsComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    BookDetailsComponent
  ]
})
export class BookDetailsModule { }
