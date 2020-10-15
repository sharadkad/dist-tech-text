import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SlickCarouselModule } from 'ngx-slick-carousel';
// import { SlickCarouselModule } from '../../node_modules/ngx-slick-carousel';
import { HttpClientModule} from '@angular/common/http';


import { AppComponent } from './app.component';
import { SliderComponent } from './slider/slider.component';

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent
  ],
  imports: [
    BrowserModule,
    SlickCarouselModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
