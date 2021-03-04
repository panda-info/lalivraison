import {Component, ElementRef, Inject, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';
import {BasketService} from '../../../../../services/basket.service';
import {Item} from '../../../../../models/item';
import {ItemType} from '../../../../../models/item-type.enum';

@Component({
  selector: 'app-selected-heading-item-dialog',
  templateUrl: './selected-heading-item-dialog.component.html',
  styleUrls: ['./selected-heading-item-dialog.component.scss']
})
export class SelectedHeadingItemDialogComponent implements OnInit, OnDestroy {

  @ViewChild('addToBasket') button: ElementRef;

  itemDeclination: string;
  itemFormula: any[];


  itemCount = 1;
  item: any;

  selectedDeclination: any;
  selectedComposition: any;

  compositions: [
    {
      name: 'Salades',
      items: [
        {
          name: 'Iceberg',
          price: 15,
          id: 1
        },
        {
          name: 'Romaine',
          price: 15,
          id: 2
        },
        {
          name: 'Roquette',
          price: 20,
          id: 3
        },
        {
          name: 'Mix salade',
          price: 20,
          id: 4
        }
        ]
      }
    ];



  // this.selectedComposition = this.data.item.compositions.map(composition => {
  //   return {
  //     name: composition.name,
  //     items: composition.items.map(item => {
  //       return {
  //         name: item.name,
  //         price: item.price,
  //         id: item.id,
  //         selected: false
  //       };
  //     })
  //   };
  // });

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private snackBar: MatSnackBar,
              private basketService: BasketService) { }

  ngOnInit(): void {
    console.log('@@@@@@@@@@@@@@@@@@@', this.selectedDeclination)
    if (this.data.item.declinations && !this.selectedDeclination) {
      this.selectedDeclination = this.data.item.declinations.values[0];
    }
    // if (this.data.item.formula) {
    //   this.data.item.formula.categories
    //   .for(category => this.itemFormula.push({name: category.name, item: null}));
    // }
    if (this.data.item.compositions) {
      // this.selectedComposition = {
      //   name: this.data.item.name,
      //   description: this.data.item.description,
      //   id: this.data.item.id,
      //   image: this.data.item.image,
      //   compositions: this.data.item.compositions.map(composition => {
      //     return {
      //       name: composition.name,
      //       items: composition.items.map(item => {
      //         return {
      //           name: item.name,
      //           price: item.price,
      //           id: item.id,
      //           selected: false
      //         };
      //       })
      //     };
      //   })
      // }
      this.selectedComposition = this.data.item.compositions.map(composition => {
          return {
            name: composition.name,
            items: composition.items.map(item => {
              return {
                name: item.name,
                price: item.price,
                id: item.id,
                selected: false
              };
            })
          };
        })
      console.log('......................', this.selectedComposition);
    }
    this.item = this.data.item;
  }

  addToBasket(): void {
    this.snackBar.open(this.data.item.name.toUpperCase(), 'Ajouté(e) au panier', {
      duration: 2000,
    });
    let item1 = new Item(this.data.item.id, this.data.item.name,
      this.data.item.price, this.itemCount, this.data.item.image, this.data.item.description,
      this.data.item.restaurant, this.data.item.type as ItemType, this.selectedComposition);
    if (this.data.item.declinations) {
      item1.declinations = this.data.item.declinations;
      item1.unitPrice = this.selectedDeclination.price;
      item1.declinations.selectedValue = this.selectedDeclination;
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
    console.log('______________________', this.selectedComposition);
    if (this.data.item.compositions) {
      this.data.item.price = null;
    }
  }

  updatePrice(): void {
    console.log('______________________', this.selectedComposition);
    this.data.item.price = this.selectedComposition.flatMap(element => element.items)
    .filter(item => item.selected === true)
    .map(item => item.price)
    .reduce((acc, val) => acc += val, 0);
  }
}
