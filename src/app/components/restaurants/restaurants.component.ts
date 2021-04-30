import {Component, Input, OnInit} from '@angular/core';
import {HttpService} from '../../services/http.service';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss']
})
export class RestaurantsComponent implements OnInit {

  @Input()
  category: string;

  @Input()
  city: any;

  restaurants = [];
  // pageSize = 12;
  page = 0;

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
    this.httpService.getRestaurants(this.category, this.page++)
    .subscribe((restaurants: any[]) => this.restaurants = restaurants);
  }

  // ngOnChanges(changes: SimpleChanges): void {
    // console.log('*****************$', changes);
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
        this.restaurants.filter(restaurant => restaurant.city === this.city);
    }
    return restaurants;
  }

  getMore(): void {
    if (this.city) {
      this.httpService.getRestaurants(this.category, this.page, this.city,
        this.cities.find(city => city.name === this.city).page++)
      .subscribe((restaurants: any[]) =>
        restaurants.forEach(restaurant => this.restaurants.push(restaurant))
      );
    } else {
      this.httpService.getRestaurants(this.category, this.page++)
      .subscribe((restaurants: any[]) =>
        restaurants.forEach(restaurant => this.restaurants.push(restaurant))
      );
    }
  }
}
