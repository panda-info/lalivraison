import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private router: Router) {
  }

  showFooter(): boolean {
    return this.router.url.indexOf('restaurant') === -1;
  }

  onActivate(e, scrollContainer): void {
    scrollContainer.scrollTop = 0;
  }

}
