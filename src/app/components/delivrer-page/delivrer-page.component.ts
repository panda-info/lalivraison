import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-delivrer-page',
  templateUrl: './delivrer-page.component.html',
  styleUrls: ['./delivrer-page.component.scss']
})
export class DelivrerPageComponent implements OnInit {

  formGroup: FormGroup;

  constructor(private fb: FormBuilder, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      phone: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10),
        Validators.pattern('0(6|7)[0-9]*$')]],
      email: ['', [Validators.required, Validators.email,
        Validators.pattern('^([a-zA-Z0-9.!#$%&’*+\\/=?^_`{|}~-]+)@([a-zA-Z0-9-]+)(\\.[a-zA-Z0-9-]+)+$')]],
      city: ['', [Validators.required, Validators.minLength(3)]],
      scooter: ['', Validators.required],
      drivingLicence: ['', Validators.required],
      student: ['', Validators.required],
      smartPhone: ['', Validators.required]
    });
  }

  validate(): void {
    this.snackBar.openFromComponent(MessageComponent, {
      duration: 3500,
    });
    this.formGroup.reset();
  }

  getErrorMessage(field: string): string {
    if (!this.formGroup.get(field).hasError('required')) {
      return 'Ce champs est invalide';
    }
    return '';
  }
}

@Component({
  template: '<button class="message-text">Votre demande a bien été prise en compte !</button>',
  styles: [`
    .message-text {
      color: #21CCBB;
      font-size: 14px;
      font-weight: 500;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      background-color: #323232;
      border: none;
      outline: none;
    }
  `],
})
export class MessageComponent {}
