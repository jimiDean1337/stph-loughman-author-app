import { NgModule } from '@angular/core';
import { AboutComponent } from './about.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    SharedModule
  ]
})
export class AboutModule { }
