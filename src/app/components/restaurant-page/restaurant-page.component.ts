import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  DoCheck,
  QueryList,
  ViewChild,
  Inject,
  ViewChildren,
  KeyValueDiffers,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { PageScrollService } from 'ngx-page-scroll-core';

import { ActivatedRoute, Router } from '@angular/router';
import { BasketService } from '../../services/basket.service';
import { Item } from '../../models/item';
import { BasketItemDialogComponent } from '../basket-page/basket-page-item/basket-item-dialog/basket-item-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { HttpService } from '../../services/http.service';
import { ViewportScroller } from '@angular/common';
import { SelectedHeadingComponent } from './selected-heading/selected-heading.component';

@Component({
  selector: 'app-restaurant-page',
  templateUrl: './restaurant-page.component.html',
  styleUrls: ['./restaurant-page.component.scss'],
})
export class RestaurantPageComponent implements OnInit, AfterViewInit, DoCheck {
  @Input()
  image: string;

  @Input()
  subImage: string;

  @ViewChild('menuItems') menuItems: ElementRef;
  @ViewChildren(SelectedHeadingComponent, { read: ElementRef })
  components: QueryList<ElementRef>;

  restaurant: any;
  isFamily: boolean;
  families: any;
  faimilyCategories: any = [];

  visibleHeadingChange: any;
  restaurantDescriptionOpened = false;
  selectedHeading = 'Tout';
  visibleHeading = 'Entrées';
  allHeadings = [];
  completelyVisibleHeadings = [];

  intersectionObserver: IntersectionObserver;

  seeMoreClicked = false;

  getDescription(): string {
    if (!this.seeMoreClicked && this.restaurant.description.length > 100) {
      return this.restaurant.description.substring(0, 100) + ' ...';
    }
    return this.restaurant.description;
  }

  constructor(
    public dialog: MatDialog,
    private route: ActivatedRoute,
    private router: Router,
    public basketService: BasketService,
    private httpService: HttpService,
    private viewportScroller: ViewportScroller,
    private kvDiffers: KeyValueDiffers
  ) {}

  ngAfterViewInit(): void {
    setTimeout(() => {
      console.log('window width:', window.innerWidth);

      this.intersectionObserver = new IntersectionObserver(
        (entries, observer) => {
          this.checkForIntersection(entries, observer);
        },
        // {
        //   rootMargin:
        //     window.innerWidth > 500
        //       ? '-300px 0px 0px 0px'
        //       : '-100px 0px 0px 0px',
        //   threshold:
        //     window.innerWidth > 500 ? [0.3, 0.8, 0.9, 1] : [0.8, 0.9, 1],
        // }
        {
          root: null,
          rootMargin:
            window.innerWidth > 500 ? '0px 0px -75% 0px' : '-100px 0px 0px 0px',
          threshold: window.innerWidth > 500 ? 0 : [0.8, 0.9, 1],
        }
      );
      this.components.forEach((c) =>
        this.intersectionObserver.observe(c.nativeElement)
      );
    }, 2000);
  }

  private checkForIntersection = (
    entries: Array<IntersectionObserverEntry>,
    observer
  ) => {
    // if (entries[0]?.intersectionRatio < 0.8) {
    //   console.log('less than 0.8 here:', entries[0].intersectionRatio);
    //   if (entries[0]?.target?.clientHeight >= window.innerHeight) {
    //     console.log('higher than window');
    //     if (entries[0].isIntersecting === true) {
    //       this.visibleHeading = entries[0].target.id;
    //     }

    //     this.allHeadings.find(
    //       (heading) => heading.name === entries[0].target.id
    //     ).ratio = entries[0].intersectionRatio;
    //   }
    // } else if (entries[0]?.intersectionRatio >= 0.8) {
    //   if (entries[0].isIntersecting === true) {
    //     this.visibleHeading = entries[0].target.id;
    //   }

    //   this.allHeadings.find(
    //     (heading) => heading.name === entries[0].target.id
    //   ).ratio = entries[0].intersectionRatio;
    // }
    console.log('entries: ', entries[0]);
    if (entries[0].isIntersecting === true) {
      this.visibleHeading = entries[0].target.id;
    }

    this.allHeadings.find(
      (heading) => heading.name === entries[0].target.id
    ).ratio = entries[0].intersectionRatio;
  };

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (!id || isNaN(+id)) {
      this.router.navigate(['/home']);
    }
    this.httpService.getRestaurant(id, '11').subscribe((restaurant) => {
      this.restaurant = restaurant;
      if (restaurant?.categories[0]?.family) {
        this.formatRestaurantCategories(restaurant.categories);
        this.isFamily = true;
      }
      let index = 0;
      this.allHeadings = this.restaurant.categories.map((heading) => {
        return { name: heading.cat_name, index: index++, ratio: 0 };
      });
    });
  }

  formatRestaurantCategories(categories: any) {
    let families: any = new Set();
    let familiesCategories: any = [];

    categories
      .filter((cat) => cat.family)
      .forEach((cat) => families.add(cat.familyname));

    families.forEach((family) => {
      familiesCategories.push({
        name: family,
        categories: categories.filter((cat) => cat.familyname === family),
        open: false,
        family: false,
      });
    });
    this.families = familiesCategories;

    console.log('familiesCategories:', familiesCategories);
  }

  showRestaurantDescription(): void {
    this.restaurantDescriptionOpened = !this.restaurantDescriptionOpened;
  }

  setSelectedHeading(selectedHeading: string): void {
    let elementById = document.getElementById(selectedHeading);

    if (this.isFamily) {
      this.families = this.families.map((family) => {
        if (
          family.categories[0].cat_name === selectedHeading ||
          family.categories.find(
            (category) => selectedHeading === category.cat_name
          )
        ) {
          return {
            ...family,
            open: !family.open,
            family: true,
          };
        }
        return {
          ...family,
          open: false,
          family: true,
        };
      });
      const openFamily = this.families.filter((family) => family.open);
      if (openFamily.length) {
        this.faimilyCategories = openFamily[0].categories;
      } else {
        this.faimilyCategories = [];
      }
      console.log('the actual family', this.families);
      console.log('the actual categories', this.faimilyCategories);
    }

    if (elementById)
      elementById.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    setTimeout(() => {
      this.selectedHeading = selectedHeading;
      this.visibleHeading = selectedHeading;
    }, 600);
  }

  scrollRight(): void {
    this.menuItems.nativeElement.scrollBy({
      left: 150,
      behavior: 'smooth',
    });
  }

  scrollLeft(): void {
    this.menuItems.nativeElement.scrollBy({
      left: -150,
      behavior: 'smooth',
    });
  }

  validateBasket(): void {
    this.router.navigate(['/checkout']);
  }

  incrementItemCount(item: Item): void {
    this.basketService.incrementItemCount(item);
  }

  decrementItemCount(item: Item): void {
    this.basketService.decrementItemCount(item);
  }

  removeItem(item: Item): void {
    this.basketService.removeItem(item);
  }

  showDialogDetails(selectedItem: Item): void {
    this.dialog.open(BasketItemDialogComponent, {
      height: window.innerWidth < 500 ? '85%' : '740px',
      width: window.innerWidth < 500 ? '85%' : '400px',
      autoFocus: false,
      data: {
        item: selectedItem,
      },
    });
  }

  setService(service: string): void {
    // console.log('**************', this.basketService.getService());
    // console.log('@@@@@@@@@@@@@', service);
    this.basketService.setService(service);
    let service1 = this.basketService.getService();
    // console.log('**************', service1);
  }

  disableButton(): boolean {
    return !this.basketService.count();
  }

  onServiceChange(service: string): void {
    this.setService(service);
  }

  handle(event: any): void {
    // console.log('°°°°°°°°°°°°°°°°°°°°°°°°', event);
    this.visibleHeading = event;
  }

  isVisible(headingName): boolean {
    if (this.visibleHeading === headingName) {
      this.viewportScroller.scrollToAnchor(headingName);
      return true;
    }
    return false;
  }
  highlightTitle(headingName: string): boolean {
    console.log(this.visibleHeading);
    return headingName === this.visibleHeading;
  }

  ngDoCheck(): void {
    const activeElement = window.document.getElementById(
      `${this.visibleHeading}ID`
    );
    // const changeHappend = this.visibleHeadingChange.diff()
    // if (activeElement) activeElement.scrollIntoView();
  }
}
