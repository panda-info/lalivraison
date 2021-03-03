export class Item {
  id: number;
  name: string;
  unitPrice: number;
  count: number;
  image: string;


  constructor(id: number, name: string, unitPrice: number, count: number, image: string) {
    this.id = id;
    this.name = name;
    this.unitPrice = unitPrice;
    this.count = count;
    this.image = image;
  }
}
