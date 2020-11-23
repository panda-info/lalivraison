import {Component, Input, OnInit} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog} from '@angular/material/dialog';
import {SelectedHeadingItemDialogComponent} from './selected-heading-item-dialog/selected-heading-item-dialog.component';

@Component({
  selector: 'app-selected-heading-item',
  templateUrl: './selected-heading-item.component.html',
  styleUrls: ['./selected-heading-item.component.scss']
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

  constructor(private snackBar: MatSnackBar, public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  addToBasket(): void {
    this.snackBar.open(this.headingItem.name.toUpperCase(), 'Ajouté(e) au panier', {
      duration: 2000,
    });
  }

  showItemDetails(): void {
    this.dialog.open(SelectedHeadingItemDialogComponent, {
      height: '420px',
      width: '400px',
      autoFocus: false,
      data: {
        price: this.headingItem.price,
        name: this.headingItem.name,
        image: this.headingItem.image,
        description: this.headingItem.description
      }
    });
  }
}
