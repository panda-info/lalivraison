import {Component, ElementRef, Inject, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';
import {BasketService} from '../../../../../services/basket.service';
import {Item} from '../../../../../models/item';
import {ItemType} from '../../../../../models/item-type.enum';
import {MatCheckboxChange} from '@angular/material/checkbox';


@Component({
  selector: 'app-selected-heading-item-dialog',
  templateUrl: './selected-heading-item-dialog.component.html',
  styleUrls: ['./selected-heading-item-dialog.component.scss']
})
export class SelectedHeadingItemDialogComponent implements OnInit, OnDestroy {

  @ViewChild('addToBasket') button: ElementRef;

  itemCount = 1;
  item: any;

  selectedDeclination: any;
  selectedComposition: any;
  selectedFormula: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private snackBar: MatSnackBar,
              private basketService: BasketService) { }

  ngOnInit(): void {
    console.log('@@@@@@@@@@@@@@@@@@@', this.selectedDeclination)
    // if (this.data.item.declinaisons && this.data.item.declinaisons.length > 1
    //   && !this.selectedDeclination) {
    if (!this.data.item.formule.length) {
      this.selectedDeclination = this.data.item.declinaisons[0];
    }
    if (this.data.item.formula) {
      this.selectedFormula = this.data.item.formule.map(formule => {
        return {
          id: formule.name,
          items: formule.items,
          selectedItem: formule.items[0]
        };
      });
    }
    if (this.data.item.formule.length) {
      this.selectedComposition = this.data.item.formule.map(composition => {
          return {
            titre: composition.titre,
            nb_choix: composition.nb_choix,
            requis: composition.requis,
            composants: composition.composants.map(item => {
              return {
                name: item.designation + ' ' + item.label,
                price: item.prix,
                id: item.id_prix,
                selected: false
              };
            })
          };
        });
      this.selectedComposition.prix = this.data.item.prix
      console.log('......................', this.selectedComposition);
    }
    this.item = this.data.item;
  }

  disableButton(): boolean {
    // if (this.data.item.compositions) {
    //   const totalPrice = this.selectedComposition.flatMap(element => element.items)
    //   .filter(item => item.selected === true)
    //   .map(item => item.price)
    //   .reduce((acc, val) => acc += val, 0);
    //   return totalPrice > 0 ? false : true;
    // }
    if (this.data.item.formule.length) {
      let map = this.selectedComposition.map(e => e.requis <= e.composants.filter(c => c.selected === true).length);
      console.log('______________________', map);
      return map.includes(false);
    }
    return false;
  }

  addToBasket(): void {
    this.snackBar.open(this.data.item.designation.toUpperCase(), 'Ajouté(e) au panier', {
      duration: 2000,
    });
    console.log('?????????????????????????????', this.data.item.prix);
    let item1 = new Item(this.data.item.id_produit, this.data.item.designation,
      this.data.item.prix, this.itemCount, this.data.item.image, this.data.item.description,
      this.data.item.restaurant_id, this.data.item.category as ItemType, this.selectedComposition, this.selectedFormula);
    // if (this.data.item.declinaisons.length > 1) {
    if (!this.data.item.formule.length) {
      const declinations = this.data.item.declinaisons;
      declinations.selectedValue = this.selectedDeclination;
      item1.declinations = declinations;
      item1.unitPrice = this.selectedDeclination.prix;
      item1.id = this.selectedDeclination.produit_id;
      // item1.declinations.selectedValue = this.selectedDeclination;
    }
    this.basketService.addItem(item1);
    // if (this.data.item.compositions) {
    //   this.data.item.price = null;
    // }
  }

  decrementCount(): void {
    if (this.itemCount > 1) {
      --this.itemCount;
    }
  }

  incrementCount(): void {
    ++this.itemCount;
  }

  ngOnDestroy(): void {
    // console.log('______________________', this.selectedComposition);
    // if (this.data.item.compositions) {
    //   this.data.item.price = null;
    // }
  }

  updatePrice(event: MatCheckboxChange): void {
    // console.log('______________________', event);
    const titre = event.source.id.split('__')[0];
    const composantId = event.source.id.split('__')[1]
    if (event.checked) {
    //   event.source.toggle();
      let find = this.selectedComposition.find(e => e.titre === titre).composants
        .filter(composant => composant.selected === true)
        .length;
      if (this.selectedComposition.find(e => e.titre === titre).nb_choix < find) {
        event.source.toggle();
        this.selectedComposition.find(e => e.titre === titre).composants
        .find(composant => composant.id === composantId).selected = false;
        console.log('*****************', this.selectedComposition.find(e => e.titre === titre).composants
        .filter(composant => composant.id === composantId));
      }
    }


    this.data.item.prix = this.selectedComposition.flatMap(element => element.composants)
      .filter(item => item.selected === true)
      .map(item => item.price)
      .reduce((acc, val) => acc += val, 0) + this.selectedComposition.prix;


    // event.source.checked = true
    // console.log('______________________', this.selectedComposition);
    // this.data.item.price = this.selectedComposition.flatMap(element => element.items)
    // .filter(item => item.selected === true)
    // .map(item => item.price)
    // .reduce((acc, val) => acc += val, 0);
  }

  showErrorMessage(category): boolean {
    if (category.requis > 0) {
      return category.composants.filter(composant => composant.selected === true).length < category.requis;
    }
    return false;
  }
}
