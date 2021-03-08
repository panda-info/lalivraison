import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.scss']
})
export class SwiperComponent implements OnInit, OnDestroy {
  public currentImageIndex = 3
  private interval;

  constructor() { }

  ngOnInit(): void {
    this.interval = setInterval(() => {
      this.nextImage();
    }, 4000);
  }

  nextImage(): void {
    this.currentImageIndex = ++this.currentImageIndex % 6;
  }

  previousImage(): void {
    this.currentImageIndex = (--this.currentImageIndex + 6) % 6;
  }

  ngOnDestroy(): void {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  setCurrentImageIndex(currentImageIndex: number): void {
    this.currentImageIndex = currentImageIndex;
  }
}
