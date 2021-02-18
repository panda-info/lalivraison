import {Component, ElementRef, Inject, OnInit, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-selected-heading-item-dialog',
  templateUrl: './selected-heading-item-dialog.component.html',
  styleUrls: ['./selected-heading-item-dialog.component.scss']
})
export class SelectedHeadingItemDialogComponent implements OnInit{

  @ViewChild('addToBasket') button: ElementRef;

  itemDeclination: string;
  itemFormula: any[];

  item: any;

  itemCount = 1;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private snackBar: MatSnackBar) { }

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
