import {AfterViewInit, Directive, ElementRef, EventEmitter, Input, Output} from '@angular/core';

@Directive({
  selector: '[appDeferLoad]'
})
export class DeferLoadDirective implements AfterViewInit{

  @Input() containerTitle: string;
  @Input() parent: ElementRef;

  @Output() public appDeferLoad: EventEmitter<string> = new EventEmitter();

  @Input() intersectionObserver: IntersectionObserver;

  constructor(
    private element: ElementRef
  ) {
  }

  public ngAfterViewInit(): void {
    // if (!this.intersectionObserver) {
      // console.log('%%%%%%%%%%%%%%%%%%', this.parent);
      // this.intersectionObserver = new IntersectionObserver((entries, observer) => {
      //     console.log('$$$$$$$$$', observer)
      //     this.checkForIntersection(entries);
      //   }, {
      //     // rootMargin: this.parent ? '-185px 0px 0px 0px' : '',
      //     rootMargin: window.innerWidth > 500 ? '-185px 0px -76% 0px' : '0px 0px -70% 0px',
      //     root: this.parent ? this.parent.nativeElement : null,
      //     // threshold: window.innerWidth < 500 ? 0.9 : 0.5
      //     threshold: 0
      //   });
    // }
    //   console.log('%%%%%%%%%%%%%%%%%%', this.intersectionObserver);
    // this.intersectionObserver.observe(this.element.nativeElement);
  }

  private checkForIntersection = (entries: Array<IntersectionObserverEntry>) => {
    entries.forEach((entry: IntersectionObserverEntry) => {
      if (this.checkIfIntersecting(entry)) {
        // console.log('####################', entry);
        this.appDeferLoad.emit(this.containerTitle);
        // this.intersectionObserver.unobserve(this.element.nativeElement);
        // this.intersectionObserver.disconnect();
      }
    });
  }

  private checkIfIntersecting(entry: IntersectionObserverEntry): boolean {
    // console.log('&&&&&&&&&&&', entry.intersectionRatio)
    return entry.isIntersecting && entry.target === this.element.nativeElement;
  }

}
