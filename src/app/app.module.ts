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
import { JoinUsComponent } from './components/join-us/join-us.component';
import {NewsletterComponent} from './components/newsletter-zone/newsletter.component';
import { AboutZoneComponent } from './components/about-zone/about-zone.component';
import { RestaurantsComponent } from './components/restaurants/restaurants.component';
import { RestaurantComponent } from './components/restaurants/restaurant/restaurant.component';
import { LocationChooserComponent } from './components/location-chooser/location-chooser.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { RestaurantPageComponent } from './components/restaurant-page/restaurant-page.component';
import { SelectedHeadingComponent } from './components/restaurant-page/selected-heading/selected-heading.component';
import { SelectedHeadingItemComponent } from './components/restaurant-page/selected-heading/selected-heading-item/selected-heading-item.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatDialogModule} from '@angular/material/dialog';
import { SelectedHeadingItemDialogComponent } from './components/restaurant-page/selected-heading/selected-heading-item/selected-heading-item-dialog/selected-heading-item-dialog.component';
import {MatRadioButton, MatRadioGroup, MatRadioModule} from '@angular/material/radio';
import {FormsModule} from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SwiperComponent,
    CarouselCategoriesComponent,
    CarouselItemComponent,
    JoinUsComponent,
    NewsletterComponent,
    AboutZoneComponent,
    RestaurantsComponent,
    RestaurantComponent,
    LocationChooserComponent,
    HomePageComponent,
    RestaurantPageComponent,
    SelectedHeadingComponent,
    SelectedHeadingItemComponent,
    SelectedHeadingItemDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatBadgeModule,
    MatMenuModule,
    MatSnackBarModule,
    MatButtonToggleModule,
    MatDialogModule,
    MatRadioModule,
    FormsModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
