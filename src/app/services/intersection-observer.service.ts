import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IntersectionObserverService {

  private intersectionObserver?: IntersectionObserver;

  // public init(): void {
  //   console.log('%%%%%%%%%%%%%%%%%%', this.parent);
  //   this.intersectionObserver = new IntersectionObserver(entries => {
  //     this.checkForIntersection(entries);
  //   }, {
  //     // rootMargin: this.parent ? '-185px 0px 0px 0px' : '',
  //     rootMargin: window.innerWidth > 500 ? '-185px 0px -76% 0px' : '0px 0px -70% 0px',
  //     root: this.parent ? this.parent.nativeElement : null,
  //     // threshold: window.innerWidth < 500 ? 0.9 : 0.5
  //     threshold: 0
  //   });
  //   this.intersectionObserver.observe(this.element.nativeElement);
  // }
  //
  // private checkForIntersection = (entries: Array<IntersectionObserverEntry>) => {
  //   entries.forEach((entry: IntersectionObserverEntry) => {
  //     if (this.checkIfIntersecting(entry)) {
  //       console.log('####################', entry);
  //       this.appDeferLoad.emit(this.containerTitle);
  //       // this.intersectionObserver.unobserve(this.element.nativeElement);
  //       // this.intersectionObserver.disconnect();
  //     }
  //   });
  // }
  //
  // private checkIfIntersecting(entry: IntersectionObserverEntry): boolean {
  //   console.log('&&&&&&&&&&&', entry.intersectionRatio)
  //   return entry.isIntersecting && entry.target === this.element.nativeElement;
  // }

  constructor() { }
}
