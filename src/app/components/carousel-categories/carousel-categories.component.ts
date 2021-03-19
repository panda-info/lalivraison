import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {HttpService} from '../../services/http.service';

@Component({
  selector: 'app-carousel-categories',
  templateUrl: './carousel-categories.component.html',
  styleUrls: ['./carousel-categories.component.scss']
})
export class CarouselCategoriesComponent implements OnInit {

  @Input()
  selectedCategory: string;

  @Output() selectedCategoryChange: EventEmitter<string> = new EventEmitter<string>();
  categories: any[];


  // selectedCategory: string;

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.httpService.getCategories().subscribe((categories: any[]) => this.categories = categories);
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
    this.selectedCategoryChange.emit(this.selectedCategory);
    console.log('#######################', this.selectedCategory);
  }
}
