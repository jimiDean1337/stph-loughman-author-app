import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from 'src/app/core/services/data.service';
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  Swiper
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
interface Testimonial {
  imgSrc?: string;
  stars?: number;
  name?: string;
  date?: string;
  text?: string;
}
@Component({
  selector: 'sla-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  books = [
    'TheJourney_cover.jpg',
    'TheJourney-Bible-Study_cover.jpg',
    'WithstandingTheStorm_cover.jpg'
  ];

  testimonials: Testimonial[] = [
    {
      imgSrc: 'https://images-na.ssl-images-amazon.com/images/S/amazon-avatars-global/default._CR0,0,1024,1024_SX48_.png',
      stars: 5,
      name: 'Gabby Large',
      date: 'February 4, 2019',
      text: `Steph Loughman writes a beautiful illustration of what goes on between mother and child during an abortion. Not only that, but she is able to tie in a biblical aspect which helps to dive into the feelings she as a mother is having. Moving, touching and all around beautiful. Definitely give this a read if you are struggling with the guilt and depression of having an abortion, I believe it will help give you peace.`
    },
    {
      imgSrc: 'https://images-na.ssl-images-amazon.com/images/S/amazon-avatars-global/24278a94-5f64-4842-abef-43694fbaea4b._CR0,0,500,500_SX48_.jpg',
      stars: 5,
      name: 'Aspire2create',
      date: 'January 4, 2018',
      text: `The journey is the author’s story of healing from her experience with abortion.
The first half of the book is written from the baby’s perspective and the second half from the authors perspective. She tells of the experiences that shaped her, her life through young adulthood and the place she found herself in that ultimately brought her to the decision to have an abortion.
This story will help anyone who’s had an abortion to understand that they can experience healing and don’t have to carry guilt and shame for their choices.
A moving and inspiring account of a taboo subject.`
    },
    {
      imgSrc: 'https://images-na.ssl-images-amazon.com/images/S/amazon-avatars/default._CR0,0,1024,1024_SX48_.png',
      stars: 5,
      name: 'Amazon Customer',
      date: 'December 10, 2017',
      text: `The Journey was a moving tribute to Joshua, Brett, & Lissa and a touching way to memorialize them. Ms. Loughman offers a path to healing for women grieving their losses, whether through abortion or miscarriage. As a post-abortive woman and author of a Voice for Victoria, I appreciate Ms. Loughman's heart for those mothers aching to know how their children are doing in Heaven.`
    },
    {
      imgSrc: 'https://images-na.ssl-images-amazon.com/images/S/amazon-avatars-global/default._CR0,0,1024,1024_SX48_.png',
      stars: 5,
      name: 'Karen B.',
      date: 'August 7, 2018',
      text: `Abortion is so emotionally difficult. This book really puts all of those feelings into perspective. Such a different approach and so healing. This book needs to be in every doctors office and abortion clinic.`
    }
  ];
  subscriberModel = {
    email: ''
  };

  statusMessage: any = {
    type: '',
    show: false,
    text: ''
  };
  constructor(private dataService: DataService) {
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
    /**
   * Testimonials slider
   */
    setTimeout(() => {
      const testimonialSwiper = new Swiper('.testimonials-slider', {
        speed: 600,
        loop: true,
        init: true,
        preloadImages: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false
        },
        slidesPerView: 1,
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true,
        }
      });

  }, 1000)
  }

}
