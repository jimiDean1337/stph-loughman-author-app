import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GalleryModule } from 'ng-gallery';
import { LightboxModule } from 'ng-gallery/lightbox';
import { SwiperModule } from 'swiper/angular';
import { SafeHtmlPipe } from './safe-html.pipe';



@NgModule({
  declarations: [
    SafeHtmlPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [CommonModule, FormsModule, SwiperModule, GalleryModule, LightboxModule, SafeHtmlPipe]
})
export class SharedModule { }
