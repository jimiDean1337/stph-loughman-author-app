import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Gallery, GalleryItem, ImageItem, ImageItemData  } from 'ng-gallery';
import { Lightbox } from 'ng-gallery/lightbox';
import { DataService } from 'src/app/core/services/data.service';
@Component({
  selector: 'sla-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  subscriberModel = {
    email: ''
  };

  statusMessage: any = {
    type: '',
    show: false,
    text: ''
  };


  constructor(private router: Router, private route: ActivatedRoute, private dataService: DataService) { }

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
  navigateTo(url) {
    this.router.navigateByUrl(url)
  }

  ngOnInit(): void {

  }


}
