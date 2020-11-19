import {Component, Input, OnInit} from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}
