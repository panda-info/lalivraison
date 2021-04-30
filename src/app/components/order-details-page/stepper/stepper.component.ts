import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements OnInit {

  @Input() serviceType: string;
  @Input() state: number;
  @Input() times: any;

  constructor() { }

  ngOnInit(): void {
    console.log('------------------TIMES ', this.state)
  }

}

enum State {
  CREATED = 0,
  ACCEPTED = 1,
  SENT = 4,
  DELIVRED = 2,
  CANCELED = 3
}


