import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-restaurant-page',
  templateUrl: './restaurant-page.component.html',
  styleUrls: ['./restaurant-page.component.scss']
})
export class RestaurantPageComponent implements OnInit {
  @Input()
  image: string;

  @Input()
  subImage: string;

  restaurantDescriptionOpened = false;

  constructor() { }

  ngOnInit(): void {
  }

  showRestaurantDescription(): void {
    this.restaurantDescriptionOpened = !this.restaurantDescriptionOpened;
  }
}
