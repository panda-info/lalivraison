import {Component, OnDestroy, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpService} from '../../services/http.service';

@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.scss']
})
export class SwiperComponent implements OnInit, OnDestroy {
  public currentImageIndex = 3
  private interval;
  images: string[];

  constructor(private http: HttpClient, private httpService: HttpService) { }

  ngOnInit(): void {
    this.httpService.getSwiperImages().subscribe((images: string[]) => {
      this.images = images;
      this.interval = setInterval(() => {
        this.nextImage();
      }, 4000);
    });
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
