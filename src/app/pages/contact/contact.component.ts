import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { DataService } from 'src/app/core/services/data.service';
import { Contact } from 'src/app/interface/contact';

@Component({
  selector: 'sla-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  statusMessage: any = {
    type: '',
    show: false,
    text: ''
  };

  contactModel: Contact = {
    newsletter: true
  };

  constructor(private dataService: DataService, public title: Title) {}

  addContact(data: Contact, form: NgForm) {
    console.log('contact form', form)
    let message: any;
    if (data && form.valid) {
      data.timestamp = new Date();
      this.dataService.addContact(data)
        .then(res => {
          message = {
            show: true,
            type: 'success',
            text: `HORAY! Your message has been sent to Steph. Keep an eye out for an email from us!`
          }
          this.toggleStatusMessage(message.show, message.type, message.text);
        })
        .catch(error => {
          message = {
            show: true,
            type: 'error',
            text: `YIKES! Uh oh, looks like we were unable to send your message. Try refreshing the page then make sure the information you enter is valid.`
          }
          this.toggleStatusMessage(message.show, message.type, message.text);
        })
      form.resetForm();
    }
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
    this.title.setTitle('Contact - Steph Loughman | Author')
    // this.toggleStatusMessage(true, 'success', 'Testing 1234567890')
  }

}
