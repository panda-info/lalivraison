import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {HttpService} from '../../services/http.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss']
})
export class RestaurantsComponent implements OnInit, OnChanges {

  @Input()
  category: string;

  @Input()
  city: any;

  restaurants = undefined;
  page = 0;

  showSpinnerForGetMore = false;

  private cities = [
    {name: 'CASABLANCA', page: 0},
    {name: 'RABAT', page: 0},
    {name: 'MARRAKECH', page: 0},
    {name: 'TANGER', page: 0},
    {name: 'FES', page: 0},
  ]

  constructor(private httpService: HttpService) {
  }

  ngOnInit(): void {
  //   this.httpService.getRestaurants(this.category, '', this.page++)
  //   .subscribe((restaurants: any[]) => this.restaurants = restaurants);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('*****************$', changes);
    this.page = 0;
    this.showSpinnerForGetMore = true;
    if (this.city) {
      this.httpService.getRestaurants(this.category, this.city.name, this.page++)
      .subscribe((restaurants: any[]) => {
        this.restaurants = restaurants;
        // this.showSpinnerForGetMore = false;
      });
    } else {
      this.httpService.getRestaurants(this.category, 'Tout', this.page++)
      .subscribe((restaurants: any[]) => {
        this.restaurants = restaurants;
        // this.showSpinnerForGetMore = false;
      });
    }
  }

  // ngOnChanges(changes: SimpleChanges): void {
    // console.log('$$$$$$$$$$$$$$$$$$', this.city);
  // }

  getRestaurants(): any[] {
    let restaurants = this.restaurants;
    if (this.restaurants && this.category !== 'Tout') {
      restaurants =
        this.restaurants.filter(restaurant => restaurant.categories.includes(this.category));
    }
    if (this.city) {
      restaurants =
        this.restaurants.filter(restaurant => restaurant.city === this.city.name);
    }
    return restaurants;
  }

  // getMore(): void {
  //   this.showSpinnerForGetMore = true;
  //   if (this.city) {
  //     this.httpService.getRestaurants(this.category, this.page, this.city,
  //       this.cities.find(city => city.name === this.city).page++)
  //     .subscribe((restaurants: any[]) => {
  //         restaurants.forEach(restaurant => this.restaurants.push(restaurant))
  //         this.showSpinnerForGetMore = false;
  //       }
  //     );
  //   } else {
  //     this.httpService.getRestaurants(this.category, this.page++)
  //     .subscribe((restaurants: any[]) => {
  //         restaurants.forEach(restaurant => this.restaurants.push(restaurant))
  //         this.showSpinnerForGetMore = false;
  //       }
  //     );
  //   }
  // }
  getMore(): void {
    this.showSpinnerForGetMore = true;
    if (this.city) {
      this.httpService.getRestaurants(this.category, this.city.name, this.page++)
      .subscribe((restaurants: any[]) => {
          restaurants.forEach(restaurant => this.restaurants.push(restaurant))
          this.showSpinnerForGetMore = false;
        }
      );
    } else {
      this.httpService.getRestaurants(this.category, 'Tout', this.page++)
      .subscribe((restaurants: any[]) => {
          restaurants.forEach(restaurant => this.restaurants.push(restaurant))
          this.showSpinnerForGetMore = false;
        }
      );
    }
  }
}
