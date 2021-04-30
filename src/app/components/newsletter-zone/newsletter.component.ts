import { Component, OnInit } from '@angular/core';
import {HttpService} from '../../services/http.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.scss']
})
export class NewsletterComponent implements OnInit {

  formGroup: FormGroup;

  constructor(private httpService: HttpService, private fb: FormBuilder, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      email: ['', [Validators.required, Validators.email,
        Validators.pattern('^([a-zA-Z0-9.!#$%&’*+\\/=?^_`{|}~-]+)@([a-zA-Z0-9-]+)(\\.[a-zA-Z0-9-]+)+$')]],
    });
  }

  getErrorMessage(): string {
    if (!this.formGroup.get('email').hasError('required')) {
      return 'Ce champs est invalide';
    }
    return '';
  }

  submit(): void {
    console.log('----------------', this.formGroup.value)
    this.httpService.postNewsLetter(this.formGroup.value).subscribe(result => {
      this.formGroup.reset();
      Object.keys(this.formGroup.controls).forEach(key => {
        this.formGroup.get(key).setErrors(null) ;
      });
      this.snackBar.openFromComponent(MessageComponent, {
        duration: 3500,
      });
    });
  }
}

@Component({
  template: '<button class="message-text">Votre email a bien été pris en compte !</button>',
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
