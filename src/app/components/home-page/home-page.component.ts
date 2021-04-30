import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  selectedCategory = 'Tout';
  selectedCity: string = null;
  constructor() { }

  ngOnInit(): void {
  }

  handleCityEmitted($event: string): void {
    this.selectedCity = $event;
  }
}
