import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {Router} from '@angular/router';
import {BasketService} from '../../services/basket.service';

@Component({
  selector: 'app-basket-page',
  templateUrl: './basket-page.component.html',
  styleUrls: ['./basket-page.component.scss']
})
export class BasketPageComponent implements OnInit {

  constructor(private router: Router, private location: Location, public basketService: BasketService) { }

  ngOnInit(): void {
  }

  back(): void {
    this.location.back();
  }

  validate(): void {
    this.router.navigate(['/checkout']);
  }
}
