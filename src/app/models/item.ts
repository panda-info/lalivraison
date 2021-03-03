export class Item {
  id: number;
  name: string;
  unitPrice: number;
  count: number;
  image: string;
  description: string;
  restaurant: string;


  constructor(id: number, name: string, unitPrice: number, count: number, image: string,
              description: string, restaurant: string) {
    this.id = id;
    this.name = name;
    this.unitPrice = unitPrice;
    this.count = count;
    this.image = image;
    this.description = description;
    this.restaurant = restaurant;
  }
}
