import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss']
})
export class RestaurantComponent implements OnInit {
  @Input() image: string;
  @Input() name: string;
  @Input() city: string;
  @Input() openTime: string;
  @Input() delivery: boolean;
  @Input() takeAway: boolean;


  constructor() { }

  ngOnInit(): void {
  }

}
