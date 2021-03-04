import {ItemType} from './item-type.enum';

export class Item {
  id: number;
  name: string;
  unitPrice: number;
  count: number;
  image: string;
  description: string;
  restaurant: string;
  itemType: ItemType;
  declinations: any;


  constructor(id: number, name: string, unitPrice: number, count: number, image: string,
              description: string, restaurant: string, itemType: ItemType) {
    this.id = id;
    this.name = name;
    this.unitPrice = unitPrice;
    this.count = count;
    this.image = image;
    this.description = description;
    this.restaurant = restaurant;
    this.itemType = itemType;
  }
}
