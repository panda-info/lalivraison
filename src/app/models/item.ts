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
  compositions: any;
  categories: any;



  id_produit: string;
  id_prix: string;
  restaurant_id: string;
  constructor() {
  }


  // constructor(id: number, name: string, unitPrice: number, count: number, image: string,
  //             description: string, restaurant: string, itemType: ItemType, compositions: any, categories: any) {
  //   this.id = id;
  //   this.name = name;
  //   this.unitPrice = unitPrice;
  //   this.count = count;
  //   this.image = image;
  //   this.description = description;
  //   this.restaurant = restaurant;
  //   this.itemType = itemType;
  //   this.compositions = compositions;
  //   this.categories = categories;
  // }
}
