import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { SelectedHeadingItemDialogComponent } from './selected-heading-item-dialog/selected-heading-item-dialog.component';
import { Router } from '@angular/router';
import { BasketService } from '../../../../services/basket.service';
import { Item } from '../../../../models/item';
import { ItemType } from '../../../../models/item-type.enum';

@Component({
  selector: 'app-selected-heading-item',
  templateUrl: './selected-heading-item.component.html',
  styleUrls: ['./selected-heading-item.component.scss'],
})
export class SelectedHeadingItemComponent implements OnInit {
  // @Input()
  // name: string;
  //
  // @Input()
  // image: string;
  //
  // @Input()
  // price: number;

  @Input()
  headingItem: any;

  constructor(
    private snackBar: MatSnackBar,
    public dialog: MatDialog,
    private basketService: BasketService
  ) {}

  ngOnInit(): void {
    // console.log('^^^^^^^^^^^^^^^^^^^^^^^', this.headingItem);
  }

  addToBasket(): void {
    if (
      (this.headingItem.declinaisons &&
        this.headingItem.declinaisons.length > 1) ||
      this.headingItem.formule.length
    ) {
      this.dialog.open(SelectedHeadingItemDialogComponent, {
        // height: '480px',
        // height: '100%',
        // minWidth: '100%',
        height: window.innerWidth < 500 ? '85%' : '740px',
        width: window.innerWidth < 500 ? '85%' : '400px',
        autoFocus: false,
        // hasBackdrop: false,
        data: {
          item: this.headingItem,
        },
      });
    } else {
      // let item = ;
      // console.log('>>>>>>>>>>>>>>>>>>', item)

      // this.basketService.addItem(new Item(this.headingItem.id, this.headingItem.designation.toUpperCase(),
      //   this.headingItem.prix, 1, this.headingItem.image, this.headingItem.description,
      //   this.headingItem.restaurant_id, this.headingItem.category as ItemType, null, null))

      // const item1 = new Item(this.headingItem.id_produit, this.headingItem.designation,
      //   this.headingItem.prix, 1, this.headingItem.image, this.headingItem.description,
      //   this.headingItem.restaurant_id, this.headingItem.category as ItemType, null, null);

      const item1 = new Item();
      item1.id = this.headingItem.id_produit;
      item1.id_produit = this.headingItem.id_produit;
      item1.id_prix = this.headingItem.id_prix;
      item1.name = this.headingItem.designation;
      item1.unitPrice = this.headingItem.prix;
      item1.count = 1;
      item1.image = this.headingItem.image;
      item1.description = this.headingItem.description;
      item1.restaurant_id = this.headingItem.restaurant_id;

      const declinations = this.headingItem.declinaisons;
      declinations.selectedValue = this.headingItem.declinaisons[0];
      item1.declinations = declinations;
      item1.unitPrice = declinations.selectedValue.prix;
      item1.id = declinations.selectedValue.produit_id;
      this.basketService.addItem(item1);

      this.snackBar.open(
        this.headingItem.designation.toUpperCase(),
        'Ajouté(e) au panier',
        {
          duration: 2000,
        }
      );
    }
  }

  showItemDetails(): void {
    this.dialog.open(SelectedHeadingItemDialogComponent, {
      // height: '480px',
      // width: '400px',
      height: window.innerWidth < 500 ? '85%' : '740px', // 480px
      width: window.innerWidth < 500 ? '85%' : '400px',
      autoFocus: false,
      // hasBackdrop: false,
      data: {
        item: this.headingItem,
      },
    });
  }
}
