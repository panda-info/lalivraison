import {Component, Input} from '@angular/core';
import {Item} from '../../../models/item';
import {BasketService} from '../../../services/basket.service';
import {MatDialog} from '@angular/material/dialog';
import {BasketItemDialogComponent} from './basket-item-dialog/basket-item-dialog.component';

@Component({
  selector: 'app-basket-page-item',
  templateUrl: './basket-page-item.component.html',
  styleUrls: ['./basket-page-item.component.scss']
})
export class BasketPageItemComponent {

  @Input()
  item: Item;


  constructor(public dialog: MatDialog, private basketService: BasketService) {
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

  showDialogDetails(): void {
    this.dialog.open(BasketItemDialogComponent, {
      height: window.innerWidth < 500 ? '85%' : '740px',
      width: window.innerWidth < 500 ? '85%' : '400px',
      autoFocus: false,
      data: {
        item: this.item
      }
    });
  }
}
