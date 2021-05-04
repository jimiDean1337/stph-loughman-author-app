import { NgModule } from '@angular/core';
import { BlogPostComponent } from './blog-post.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    BlogPostComponent
  ],
  imports: [
    SharedModule
  ]
})
export class BlogPostModule { }
