import {Component, Inject, OnInit, ViewChild, ElementRef} from '@angular/core';
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

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    // if (this.data.item.declinations) {
    //   this.itemDeclination = this.data.item.declinations.values[0].name;
    // }
  }

  addToBasket(): void {
    this.snackBar.open(this.data.name.toUpperCase(), 'Ajouté(e) au panier', {
      duration: 2000,
    });
  }

}
