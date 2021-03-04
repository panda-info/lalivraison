import {Component, ElementRef, Inject, OnInit, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';
import {BasketService} from '../../../../../services/basket.service';
import {Item} from '../../../../../models/item';
import {ItemType} from '../../../../../models/item-type.enum';

@Component({
  selector: 'app-selected-heading-item-dialog',
  templateUrl: './selected-heading-item-dialog.component.html',
  styleUrls: ['./selected-heading-item-dialog.component.scss']
})
export class SelectedHeadingItemDialogComponent implements OnInit{

  @ViewChild('addToBasket') button: ElementRef;

  itemDeclination: string;
  itemFormula: any[];


  itemCount = 1;
  item: any;

  selectedDeclination: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private snackBar: MatSnackBar,
              private basketService: BasketService) { }

  ngOnInit(): void {
    console.log('@@@@@@@@@@@@@@@@@@@', this.selectedDeclination)
    if (this.data.item.declinations && !this.selectedDeclination) {
      this.selectedDeclination = this.data.item.declinations.values[0];
    }
    // if (this.data.item.formula) {
    //   this.data.item.formula.categories
    //   .for(category => this.itemFormula.push({name: category.name, item: null}));
    // }
    this.item = this.data.item;
  }

  addToBasket(): void {
    this.snackBar.open(this.data.item.name.toUpperCase(), 'Ajouté(e) au panier', {
      duration: 2000,
    });
    let item1 = new Item(this.data.item.id, this.data.item.name,
      this.data.item.price, this.itemCount, this.data.item.image, this.data.item.description,
      this.data.item.restaurant, this.data.item.type as ItemType);
    if (this.data.item.declinations) {
      item1.declinations = this.data.item.declinations;
      item1.unitPrice = this.selectedDeclination.price;
      // item1.declinations.selectedValue = {
      //   id: Number(this.selectedDeclination.id),
      //   name: String(this.selectedDeclination.name),
      //   price: Number(this.selectedDeclination.price)
      // };
      item1.declinations.selectedValue = this.selectedDeclination;
    }
      console.log('----------------------', item1)
      console.log('======================', this.data.item.declinations)
    this.basketService.addItem(item1);
  }

  disableAddButtonForFormula(): boolean {
    // return this.data.item.formula
    //   && this.itemFormula.filter(category => !category.item).length === 0;
    return false;
  }

  decrementCount(): void {
    if (this.itemCount > 1) {
      --this.itemCount;
    }
  }

  incrementCount(): void {
    ++this.itemCount;
  }
}
