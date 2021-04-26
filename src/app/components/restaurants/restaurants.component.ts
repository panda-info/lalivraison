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

  restaurants = [];
  pageSize = 12;
  page = 0;

  constructor(private httpService: HttpService) {
  }

  ngOnInit(): void {
    this.httpService.getRestaurants(this.category, this.page++, this.pageSize)
    .subscribe((restaurants: any[]) => this.restaurants = restaurants);
  }

  getRestaurants(): any[] {
    if (this.restaurants && this.category !== 'Tout') {
      return this.restaurants.filter(restaurant => restaurant.categories.includes(this.category));
    }
    return this.restaurants;
  }

  getMore(): void {
    this.httpService.getRestaurants(this.category, this.page++, this.pageSize)
    .subscribe((restaurants: any[]) =>
      restaurants.forEach(restaurant => this.restaurants.push(restaurant))
    );
  }
}
