import {Component, Input, OnInit} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

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

  constructor(private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  addToBasket(): void {
    this.snackBar.open(this.name.toUpperCase(), 'Ajouté(e) au panier', {
      duration: 2000,
    });
  }
}
