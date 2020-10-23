import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.scss']
})
export class SwiperComponent implements OnInit {
  public currentImageIndex = 3

  constructor() { }

  ngOnInit(): void {
  }

  nextImage(): void {
    this.currentImageIndex = ++this.currentImageIndex % 4;
  }

  previousImage(): void {
    this.currentImageIndex = (--this.currentImageIndex + 4) % 4;
  }
}
