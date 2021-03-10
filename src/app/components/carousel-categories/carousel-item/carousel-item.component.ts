import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-carousel-item',
  templateUrl: './carousel-item.component.html',
  styleUrls: ['./carousel-item.component.scss']
})
export class CarouselItemComponent implements OnInit {
  @Input() text: string;
  @Input() imageSource: string;
  @Input() selected: boolean

  constructor() { }

  ngOnInit(): void {
  }

}
