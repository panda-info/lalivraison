import {Injectable} from '@angular/core';
import {Item} from '../models/item';
import {Service} from '../models/service.enum';

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  // basket: Basket = new Basket();
  itemsCount = 0;
  items: Item[] = [];
  service: Service;

  constructor() { }

  incrementItemCount(item: Item): void {
    const items = this.items.filter(element => element.id === item.id);
    if (items.length) {
      ++items[0].count;
      ++this.itemsCount;
    }
  }

  addItem(item: Item): void {
    const items = this.items.filter(element => element.id === item.id);
    if (items.length) {
      items[0].count += item.count;
    } else {
      this.items.push(item);
    }
    this.itemsCount += item.count;
    console.log('###############', this.items);
  }

  decrementItemCount(item: Item): void {
    const index = this.items.findIndex(element => element.id === item.id);
    if (index > -1) {
      if (this.items[index].count > 1) {
        --this.items[index].count;
        --this.itemsCount;
      }
    }
  }

  removeItem(item: Item): void {
    const index = this.items.findIndex(element => element.id === item.id);
    if (index > -1) {
      this.itemsCount -= this.items[index].count;
      this.items.splice(index, 1);
    }
  }

  count(): number {
    return this.itemsCount;
  }

  total(): number {
    return this.items.map(item => item.unitPrice * item.count).reduce((acc, val) => acc += val, 0);
  }
}
