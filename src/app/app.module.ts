import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import {MatMenuModule} from '@angular/material/menu';
import { SwiperComponent } from './components/swiper/swiper.component';
import { CarouselCategoriesComponent } from './components/carousel-categories/carousel-categories.component';
import { CarouselItemComponent } from './components/carousel-categories/carousel-item/carousel-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SwiperComponent,
    CarouselCategoriesComponent,
    CarouselItemComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatBadgeModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
