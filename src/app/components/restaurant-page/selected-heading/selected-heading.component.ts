import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-selected-heading',
  templateUrl: './selected-heading.component.html',
  styleUrls: ['./selected-heading.component.scss']
})
export class SelectedHeadingComponent implements OnInit {
  @Input()
  heading: any;

  @Input() highlightTitle: boolean;

  constructor() {}

  ngOnInit(): void {
    window.scroll(0, 0);
  }

}
