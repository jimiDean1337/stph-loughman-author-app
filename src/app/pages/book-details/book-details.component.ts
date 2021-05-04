import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { BookService } from 'src/app/core/services/book.service';
import { Book } from 'src/app/interface/book';
import SwiperCore, {
  Pagination,
  Autoplay,
  SwiperOptions,
  Swiper,
  EffectFlip,
} from 'swiper/core';
SwiperCore.use([Swiper, Pagination, Autoplay, EffectFlip])
@Component({
  selector: 'sla-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss'],
})
export class BookDetailsComponent implements OnInit {
  selectedBook$: Observable<Book>;
  // swiperOptions: SwiperOptions = {
  //   speed: 600,
  //   loop: true,
  //   init: true,
  //   autoHeight: true,
  //   centeredSlides: true,
  //   centerInsufficientSlides: true,
  //   preloadImages: true,
  //   autoplay: {
  //     delay: 5000,
  //     disableOnInteraction: true
  //   },
  //   slidesPerView: 1,
  //   pagination: {
  //     el: '.swiper-pagination',
  //     type: 'bullets',
  //     clickable: true,
  //   }
  // }
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    // public gallery: Gallery,
    private bookService: BookService
  ) {

  }

  ngOnInit(): void {
    this.selectedBook$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        const bookTitle = params.get('bookTitle');
        return this.bookService.getBookByTitle(bookTitle);
      })
    );
    /**
     * book details slider
     */
    setTimeout(() => {
      const booksSwiperInit = new Swiper('.book-details-slider', {
        speed: 600,
        effect: 'flip',
        flipEffect: {
          slideShadows: true,
          limitRotation: true
        },
        loop: true,
        init: true,
        autoHeight: true,
        centeredSlides: true,
        centerInsufficientSlides: true,
        preloadImages: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: true
        },
        slidesPerView: 1,
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true,
        }
      });

      console.log('Books Swiper Initiated', booksSwiperInit);
    }, 1000);
  }
}
