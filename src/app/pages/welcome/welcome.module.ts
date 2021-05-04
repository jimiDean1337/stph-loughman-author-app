import { NgModule } from '@angular/core';
import { WelcomeComponent } from './welcome.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    WelcomeComponent
  ],
  imports: [
    SharedModule
  ]
})
export class WelcomeModule { }
