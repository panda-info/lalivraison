import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HeaderComponent} from './components/header/header.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import {MatMenuModule} from '@angular/material/menu';
import {SwiperComponent} from './components/swiper/swiper.component';
import {CarouselCategoriesComponent} from './components/carousel-categories/carousel-categories.component';
import {CarouselItemComponent} from './components/carousel-categories/carousel-item/carousel-item.component';
import {JoinUsComponent} from './components/join-us/join-us.component';
import {NewsletterComponent} from './components/newsletter-zone/newsletter.component';
import {AboutZoneComponent} from './components/about-zone/about-zone.component';
import {RestaurantsComponent} from './components/restaurants/restaurants.component';
import {RestaurantComponent} from './components/restaurants/restaurant/restaurant.component';
import {LocationChooserComponent} from './components/location-chooser/location-chooser.component';
import {HomePageComponent} from './components/home-page/home-page.component';
import {RestaurantPageComponent} from './components/restaurant-page/restaurant-page.component';
import {SelectedHeadingComponent} from './components/restaurant-page/selected-heading/selected-heading.component';
import {SelectedHeadingItemComponent} from './components/restaurant-page/selected-heading/selected-heading-item/selected-heading-item.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatDialogModule} from '@angular/material/dialog';
import {SelectedHeadingItemDialogComponent} from './components/restaurant-page/selected-heading/selected-heading-item/selected-heading-item-dialog/selected-heading-item-dialog.component';
import {MatRadioModule} from '@angular/material/radio';
import {FormsModule} from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {CheckoutPageComponent} from './components/checkout-page/checkout-page.component';
import {OrderDetailsPageComponent} from './components/order-details-page/order-details-page.component';
import {StepperComponent} from './components/order-details-page/stepper/stepper.component';
import {BasketPageComponent} from './components/basket-page/basket-page.component';
import {BasketPageItemComponent} from './components/basket-page/basket-page-item/basket-page-item.component';
import {RouterModule, Routes} from '@angular/router';
import {BasketItemDialogComponent} from './components/basket-page/basket-page-item/basket-item-dialog/basket-item-dialog.component';
import {MatSelectModule} from '@angular/material/select';
import {DelivrerPageComponent} from './components/delivrer-page/delivrer-page.component';
import {PartnerPageComponent} from './components/partner-page/partner-page.component';
import {HttpClientModule} from '@angular/common/http';


const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'restaurant/:name', component: RestaurantPageComponent },
  { path: 'checkout', component: CheckoutPageComponent },
  { path: 'suivi-commande', component: OrderDetailsPageComponent },
  { path: 'panier', component: BasketPageComponent },
  { path: 'devenir-livreur', component: DelivrerPageComponent },
  { path: 'devenir-partenaire', component: PartnerPageComponent },
  { path: '**', component: HomePageComponent }
];

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
    SelectedHeadingItemDialogComponent,
    CheckoutPageComponent,
    OrderDetailsPageComponent,
    StepperComponent,
    BasketPageComponent,
    BasketPageItemComponent,
    BasketItemDialogComponent,
    DelivrerPageComponent,
    PartnerPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes,
      {
        scrollPositionRestoration: 'enabled',
        anchorScrolling: 'enabled',
        scrollOffset: [0, -200]
      }
    ),
    FormsModule,
    HttpClientModule,
    // ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatBadgeModule,
    MatMenuModule,
    MatSnackBarModule,
    MatButtonToggleModule,
    MatDialogModule,
    MatRadioModule,
    MatCheckboxModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
