import {Item} from './item';
import {Service} from './service.enum';

export class Basket {
  itemsCount = 0;
  items: Item[] = [];
  service: Service;
}
