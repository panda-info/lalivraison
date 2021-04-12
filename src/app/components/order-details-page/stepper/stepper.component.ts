import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements OnInit {

  @Input() serviceType: string;
  @Input() state: number;
  @Input() times: string[];

  constructor() { }

  ngOnInit(): void {
  }

}
