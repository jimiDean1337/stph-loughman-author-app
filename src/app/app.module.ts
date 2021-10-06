import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GalleryModule } from 'ng-gallery';
import { LightboxModule } from 'ng-gallery/lightbox';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeModule } from './pages/welcome/welcome.module';
import { AboutModule } from './pages/about/about.module';
import { SharedModule } from './shared/shared.module';
import { BooksModule } from './pages/books/books.module';
import { EventsModule } from './pages/events/events.module';
import { BlogModule } from './pages/blog/blog.module';
import { ContactModule } from './pages/contact/contact.module';
import { BlogPostModule } from './pages/blog-post/blog-post.module';
import { CoreModule } from './core/core.module';
import { BookDetailsModule } from './pages/book-details/book-details.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    GalleryModule,
    LightboxModule,
    CoreModule,
    SharedModule,
    WelcomeModule,
    AboutModule,
    BooksModule,
    EventsModule,
    BlogModule,
    ContactModule,
    BlogPostModule,
    BookDetailsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
