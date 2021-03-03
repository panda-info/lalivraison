import {Component, ElementRef, Inject, OnInit, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';
import {BasketService} from '../../../../../services/basket.service';
import {Item} from '../../../../../models/item';

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

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private snackBar: MatSnackBar,
              private basketService: BasketService) { }

  ngOnInit(): void {
    // if (this.data.item.declinations) {
    //   this.itemDeclination = this.data.item.declinations.values[0].name;
    // }
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
    this.basketService.addItem(new Item(this.data.item.id, this.data.item.name,
      this.data.item.price, this.itemCount, this.data.item.image, this.data.item.description,
      this.data.item.restaurant));
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
