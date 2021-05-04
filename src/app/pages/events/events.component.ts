import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from 'src/app/core/services/data.service';
import { EventService } from 'src/app/core/services/event.service';
import { AuthorEvent } from 'src/app/interface/event';
import { EventRequest } from 'src/app/interface/event-request';
// import { EVENTS } from 'src/app/mock/events.mock';


@Component({
  selector: 'sla-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  events: AuthorEvent[];
  eventRequestModel: EventRequest = {};

  subscriberModel = {
    email: ''
  };
  statusMessage: any = {
    type: '',
    show: false,
    text: ''
  };
  constructor(private eventService: EventService, private dataService: DataService) { }

  addEventRequest(data: EventRequest, form: NgForm) {
    let message: any;
    // console.log('Event Request Form', data, form);
    data.timestamp = new Date();
    this.eventService.addEventRequest(data)
    .then(success => {
        form.resetForm();
        message = {
          show: true,
          type: 'success',
          text: `YAY! Your event request has been sent to Steph. Keep an eye out for an email from us!`
        }
        this.toggleStatusMessage(message.show, message.type, message.text);
       })
      .catch(error => {
        message = {
          show: true,
          type: 'error',
          text: `Uh oh, looks like we were unable to send your request. Try refreshing the page then make sure the information you enter is valid.`
        }
        this.toggleStatusMessage(message.show, message.type, message.text);
    })
  }

  addSubscriber(email: string, form: NgForm) {
    const data = {
      email,
      timestamp: new Date()
    }
    let message;
    this.dataService.addSubscriber(data)
      .then(success => {
        form.resetForm();
        email = '';
      message = {
        show: true,
        type: 'success',
        text: `YAY! You are now signed up for updates! Lucky you!`
      }
        this.toggleStatusMessage(message.show, message.type, message.text);
      })
      .catch(error => {
        message = {
          show: true,
          type: 'error',
          text: `Uh oh, looks like we were unable to sign you up. Try refreshing the page then make sure the email you enter is valid.`
        }
        this.toggleStatusMessage(message.show, message.type, message.text);
      });
  }

  makeUppercase(text: string) {
    return text.toUpperCase();
  }
  toggleStatusMessage(show: boolean = false, type?: 'success' | 'error', text?: string) {
    this.statusMessage = {
      show,
      type,
      text
    }
  }

  ngOnInit(): void {
    this.eventRequestModel = {
      canCall: true
    }
    // this.eventService.getAllEvents().subscribe(events => this.events = events);
  }

}
