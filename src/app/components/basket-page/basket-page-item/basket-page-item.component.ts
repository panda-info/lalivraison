import {Component, Input} from '@angular/core';
import {Item} from '../../../models/item';
import {BasketService} from '../../../services/basket.service';

@Component({
  selector: 'app-basket-page-item',
  templateUrl: './basket-page-item.component.html',
  styleUrls: ['./basket-page-item.component.scss']
})
export class BasketPageItemComponent {

  @Input()
  headingItem: Item;


  constructor(private basketService: BasketService) {
  }

  incrementItemCount(item: Item): void {
    this.basketService.incrementItemCount(item);
  }

  decrementItemCount(item: Item): void {
    this.basketService.decrementItemCount(item);
  }

  removeItem(item: Item): void {
    this.basketService.removeItem(item);
  }
}
