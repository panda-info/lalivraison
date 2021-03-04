import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {Router} from '@angular/router';

@Component({
  selector: 'app-basket-item-dialog',
  templateUrl: './basket-item-dialog.component.html',
  styleUrls: ['./basket-item-dialog.component.scss']
})
export class BasketItemDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private router: Router) { }

  ngOnInit(): void {
    console.log('<<<<<<<<<<<<<<<<', this.data.item);
  }

  navigateToRestautant(): void {
    this.router.navigate(['/restaurant/' + this.data.item.restaurant]);
  }
}
