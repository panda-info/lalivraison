import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {BasketService} from '../../services/basket.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import {HttpService} from '../../services/http.service';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.scss']
})
export class CheckoutPageComponent implements OnInit {
  formGroup: FormGroup;

  constructor(private router: Router, public basketService: BasketService, private fb: FormBuilder,
              private snackBar: MatSnackBar, private httpService: HttpService) { }

  ngOnInit(): void {
    this.checkEmptyBasket();
    this.formGroup = this.fb.group({
      nom: ['', [Validators.required, Validators.minLength(3)]],
      prenom: ['', [Validators.required, Validators.minLength(3)]],
      telephone: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10),
        Validators.pattern('0(6|7)[0-9]*$')]],
      email: ['', [Validators.required, Validators.email,
        Validators.pattern('^([a-zA-Z0-9.!#$%&’*+\\/=?^_`{|}~-]+)@([a-zA-Z0-9-]+)(\\.[a-zA-Z0-9-]+)+$')]],
      adresse: ['', [Validators.required, Validators.minLength(3)]],
      quartier: [{value: 'Maarif', disabled: true}, Validators.required],
      ville: [{value: 'Casablanca', disabled: true}, [Validators.required, Validators.minLength(3)]],
      moyen_paiement: ['', Validators.required],
      note: [''],
    });
  }

  getErrorMessage(field: string): string {
    if (!this.formGroup.get(field).hasError('required')) {
      return 'Ce champs est invalide';
    }
    return '';
  }

  validate(): void {
    const checkout = this.formGroup.getRawValue();
    // checkout.items = this.basketService.items.map(item => {return {id: item.id, count: item.count}; });
    checkout.items = [
      {id_produit: 67, count: 1}, // produit normal
      {id_produit: 44, id_declinaison: 173, count: 3}, // declinaison
      {
        // formule
        id_produit: 50,
        formule: [
          {
            id_titre: 3616,
            produits: [38763, 38762],
          },
          {
            id_titre: 3615,
            produits: [38756, 38755],
          }
        ],
        count: 5}
    ];
    this.httpService.postCheckout(checkout).subscribe(result => {}/*this.router.navigate(['/suivi-commande'])*/);
  }

  private checkEmptyBasket(): void {
    // if (this.basketService.count() === 0) {
    //   this.router.navigate(['/']);
    // }
  }
}
