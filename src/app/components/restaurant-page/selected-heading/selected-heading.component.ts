import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-selected-heading',
  templateUrl: './selected-heading.component.html',
  styleUrls: ['./selected-heading.component.scss']
})
export class SelectedHeadingComponent implements OnInit {
  @Input()
  heading: any;

  constructor() { }

  ngOnInit(): void {
  }

}
