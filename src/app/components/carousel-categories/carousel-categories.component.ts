import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel-categories',
  templateUrl: './carousel-categories.component.html',
  styleUrls: ['./carousel-categories.component.scss']
})
export class CarouselCategoriesComponent implements OnInit {
  selectedCategory = 'Tout';

  constructor() { }

  ngOnInit(): void {
  }

  scrollLeft(itemsContainer: HTMLElement): void {
    itemsContainer.scrollBy({
      left: -150,
      behavior: 'smooth'
    });
  }

  scrollRight(itemsContainer: HTMLElement): void {
    itemsContainer.scrollBy({
      left: 150,
      behavior: 'smooth'
    });
  }

  selectCategory(category: string): void {
    this.selectedCategory = category;
  }
}
