import { NgModule } from '@angular/core';
import { EventsComponent } from './events.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    EventsComponent
  ],
  imports: [
    SharedModule
  ]
})
export class EventsModule { }
