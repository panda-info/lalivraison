import {Component, Input, OnInit} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-selected-heading-item',
  templateUrl: './selected-heading-item.component.html',
  styleUrls: ['./selected-heading-item.component.scss']
})
export class SelectedHeadingItemComponent implements OnInit {
  @Input()
  name: string;

  @Input()
  image: string;

  @Input()
  price: number;

  constructor(private snackBar: MatSnackBar, public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  addToBasket(): void {
    this.snackBar.open(this.name.toUpperCase(), 'Ajouté(e) au panier', {
      duration: 2000,
    });
  }

  showItemDetails(): void {
  }
}
