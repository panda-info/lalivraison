import { Component, OnInit } from '@angular/core';
import {BasketService} from '../../services/basket.service';

@Component({
  selector: 'app-order-details-page',
  templateUrl: './order-details-page.component.html',
  styleUrls: ['./order-details-page.component.scss']
})
export class OrderDetailsPageComponent implements OnInit {

  constructor(public basketService: BasketService) { }

  ngOnInit(): void {
  }

}
