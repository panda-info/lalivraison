import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-basket-page-item',
  templateUrl: './basket-page-item.component.html',
  styleUrls: ['./basket-page-item.component.scss']
})
export class BasketPageItemComponent {

  @Input()
  headingItem: any;

}
