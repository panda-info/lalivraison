import {Component, OnDestroy, OnInit} from '@angular/core';
import {BasketService} from '../../services/basket.service';
import {HttpService} from '../../services/http.service';

@Component({
  selector: 'app-order-details-page',
  templateUrl: './order-details-page.component.html',
  styleUrls: ['./order-details-page.component.scss']
})
export class OrderDetailsPageComponent implements OnInit, OnDestroy {
  orderStatus: any;
  private interval;

  constructor(public basketService: BasketService, private httpService: HttpService) { }

  ngOnInit(): void {
    this.httpService.getOrderStatus('1').subscribe(orderStatus => {
      this.orderStatus = orderStatus;
      this.interval = setInterval(() => {
        this.httpService.getOrderStatusSummary('1').subscribe((orderStatusRefresh: any) => {
          this.orderStatus.times = orderStatusRefresh.times;
          this.orderStatus.status = orderStatusRefresh.status;
          this.orderStatus.state = orderStatusRefresh.state;
        });
      }, 6000);
    });
  }

  ngOnDestroy(): void {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

}
