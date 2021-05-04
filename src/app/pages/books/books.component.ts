import { Component, OnInit } from '@angular/core';
import Aos from 'aos';
// import Isotope from 'isotope-layout';
import Swiper from 'swiper';
import { BookService } from 'src/app/core/services/book.service';
import { Book } from '../../interface/book';
import { Gallery, GalleryItem } from 'ng-gallery';
import { Lightbox } from 'ng-gallery/lightbox';
import { Router } from '@angular/router';

@Component({
  selector: 'sla-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  books: Book[] = [];
  constructor(private router: Router, private bookService: BookService) { }

  navigate(url) {
    this.router.navigateByUrl(url);
  }
  ngOnInit(): void {
    this.bookService.getAllBooks().subscribe(books => {
      this.books = books;
    });

  }

}

