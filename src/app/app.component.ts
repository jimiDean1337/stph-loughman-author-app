import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import Aos from 'aos';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
// declare const Waypoint: any;
// import Waypoint from 'waypoints';

@Component({
  selector: 'sla-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Steph Loughman | Author';
  isLoading: boolean = false;
  navStart: any;
  showMobileNav: boolean = false;

  constructor(private router: Router) {
    this.navStart = router.events.pipe(
      filter(evt => evt instanceof NavigationStart)
    ) as Observable<NavigationStart>;
  }

  backToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  toggleMobileNav() {
    this.showMobileNav = !this.showMobileNav;
  }

  ngOnInit() {
    Aos.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false
    });
    initialize(window, document);
    this.navStart.subscribe(() => {
      this.showMobileNav = false;
      this.isLoading = true;
      this.backToTop();
      setTimeout(() => {
        this.isLoading = false;
      }, 1000);
    })
  }
}

function initialize(win: Window, doc: Document) {

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return doc.querySelectorAll(el)
    } else {
      return doc.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select('#header')
    let offset = header.offsetHeight

    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    })
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (win.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    win.addEventListener('load', toggleBacktotop)
    onscroll(doc, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  // on('click', '.mobile-nav-toggle', function (e) {
  //   select('#navbar').classList.toggle('navbar-mobile')
  //   this.classList.toggle('bi-list')
  //   this.classList.toggle('bi-x')
  //   select('.navbar ul').style.display = 'block';
  // })

  /**
   * Mobile nav dropdowns activate
   */
  // on('click', '.navbar ul > a', function (e) {
  //     e.preventDefault()
  //     select('#navbar').classList.toggle('navbar-mobile')

  // }, true)

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function (e) {
    if (select(this.hash)) {
      e.preventDefault()

      let navbar = select('#navbar')
      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  win.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });
}
