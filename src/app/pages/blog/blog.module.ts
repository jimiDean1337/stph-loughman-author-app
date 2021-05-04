import { NgModule } from '@angular/core';
import { BlogComponent } from './blog.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    BlogComponent
  ],
  imports: [
    SharedModule
  ]
})
export class BlogModule { }
