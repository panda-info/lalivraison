import {Component, OnDestroy, OnInit} from '@angular/core';
import {BasketService} from '../../services/basket.service';
import {HttpService} from '../../services/http.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-order-details-page',
  templateUrl: './order-details-page.component.html',
  styleUrls: ['./order-details-page.component.scss']
})
export class OrderDetailsPageComponent implements OnInit, OnDestroy {
  orderStatus: any;
  private interval;

  constructor(public basketService: BasketService, private httpService: HttpService,
              private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id || isNaN(+id)) {
      this.router.navigate(['/home']);
    }
    this.httpService.getOrderStatus(id).subscribe(orderStatus => {
      this.orderStatus = orderStatus;
      this.interval = setInterval(() => {
        this.httpService.getOrderStatusSummary(id).subscribe((orderStatusRefresh: any) => {
          console.log('#################### ', orderStatusRefresh)
          console.log('@@@@@@@@@@@@@@@@@@@@ ', this.orderStatus)
          this.orderStatus.times = orderStatusRefresh.times;
          this.orderStatus.infos.status = orderStatusRefresh.status;
          this.orderStatus.infos.state = orderStatusRefresh.state;
          if (this.orderStatus.infos.state === 3 || this.orderStatus.infos.state === 2) {
            clearInterval(this.interval);
          }
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
