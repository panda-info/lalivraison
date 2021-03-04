import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {BasketService} from '../../services/basket.service';
import {Item} from '../../models/item';
import {BasketItemDialogComponent} from '../basket-page/basket-page-item/basket-item-dialog/basket-item-dialog.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-restaurant-page',
  templateUrl: './restaurant-page.component.html',
  styleUrls: ['./restaurant-page.component.scss']
})
export class RestaurantPageComponent implements OnInit {
  @Input()
  image: string;

  @Input()
  subImage: string;

  // @Input()
  restaurant = {
    image: '../../../assets/images/sushi.jpg',
    subImage: '../../../assets/images/jap.jpg',
    name: 'NIKKEI.MA',
    kitchenType: 'Cuisine Nippone',
    orderFreeMinPrice: '140',
    phoneNumber: '05 22 99 48 77',
    openTime: '11',
    closeTime: '22',
    description: 'NIKKEI met un point d\'honneur à développer une large gamme de sushis, de plateaux...',
    headings: [
      {
        name: 'Tout',
        items: [
          {
            id: 100,
            image: '../../../assets/images/p1.png',
            name: 'SALADE DE CHOUX',
            price: '25',
            description: 'Chou et carotte émincé vinaigrette au soja.',
            restaurant: 'NIKKEI'
          },
          {
            id: 101,
            image: '../../../assets/images/p2.png',
            name: 'WAKAME SAUMON',
            price: '60',
            description: 'Chou et carotte émincé vinaigrette au soja.',
            restaurant: 'NIKKEI'
          },
          {
            id: 102,
            image: '../../../assets/images/p3.png',
            name: 'GAMBAS TEMPURA',
            price: '65',
            description: 'Chou et carotte émincé vinaigrette au soja.',
            restaurant: 'NIKKEI'
          },
          {
            id: 103,
            name: 'SALMON AVOCADO TARTARE',
            image: '../../../assets/images/SALMON-AVOCADO-TARTARE.png',
            price: '55',
            description: 'Saumon, avocat, sésame, boulette de riz vinaigré, sauce Nikkei servie à part',
            restaurant: 'NIKKEI'
          },
          {
            id: 104,
            name: 'TUNA SALMON TARTARE (NEW)',
            image: '../../../assets/images/TUNA-SALMON-TARTARE-(NEW).jpg',
            price: '65',
            description: 'Poisson blanc, mangue, avocat, menthe ciselée, boulette de riz vinaigré, sauce Ponzu servie à part',
            restaurant: 'NIKKEI'
          },
          {
            id: 105,
            name: 'CRABE TARTARE',
            image: '../../../assets/images/CRABE-TARTARE.png',
            price: '59',
            description: 'Tartare de crabe, avocat, masago, boulette de riz vinaigré, Mayo épicé',
            restaurant: 'NIKKEI'
          },
          {
            id: 106,
            name: 'SALMON TIRADITO',
            image: '../../../assets/images/SALMON-TIRADITO.png',
            price: '55',
            description: '7P. Saumon, oignon, ciboulette, coriandre, sauce nikkei',
            restaurant: 'NIKKEI'
          },
          {
            id: 107,
            name: 'TUNA TIRADITO',
            image: '../../../assets/images/TUNA-TIRADITO.png',
            price: '55',
            description: '7P. Thon, poireaux, graines de sésame, sauce Ponzu',
            restaurant: 'NIKKEI'
          },
          {
            id: 108,
            name: 'MAHI MAHI TIRADITO',
            image: '../../../assets/images/MAHI-MAHI-TIRADITO.png',
            price: '55',
            description: '7P. Poisson blanc, menthe, graines de sésame, sauce Ponzu',
            restaurant: 'NIKKEI'
          },
          {
            id: 109,
            name: 'SALMON TATAKI',
            image: '../../../assets/images/SALMON-TATAKI.png',
            price: '50',
            description: '5P. Saumon mi-cuit, sésame, sauce NIKKEI',
            restaurant: 'NIKKEI'
          },
          {
            id: 110,
            name: 'TUNA TATAKI',
            image: '../../../assets/images/TUNA-TATAKI.png',
            price: '50',
            description: '5P. Thon mi-cuit, sésame, sauce PONZU',
            restaurant: 'NIKKEI'
          },
          {
            id: 111,
            name: 'SALMON CHIRACHI',
            image: '../../../assets/images/SALMON-CHIRACHI.png',
            price: '55',
            description: 'Sashimi saumon, riz vinaigré , sésame, soja sauce',
            restaurant: 'NIKKEI'
          },
          {
            id: 112,
            name: 'SALMON AVOCADO CHIRACHI',
            image: '../../../assets/images/SALMON-AVOCADO-CHIRACHI.png',
            price: '60',
            description: 'Sashimi saumon, avocat, riz vinaigré, sésame, soja sauce',
            restaurant: 'NIKKEI'
          },
          {
            id: 113,
            name: 'TUNA SALMON CHIRASHI',
            image: '../../../assets/images/TUNA-SALMON-CHIRASHI.jpg',
            price: '60',
            description: 'Sashimi saumon, avocat, riz vinaigré, sésame, soja sauce',
            restaurant: 'NIKKEI'
          },
          {
            id: 114,
            name: 'CHICKEN BALL\'S',
            image: '../../../assets/images/CHICKEN-BALLS.png',
            price: '39',
            description: 'Boulette de poulet, sauce teriyaki',
            restaurant: 'NIKKEI'
          },
          {
            id: 115,
            name: 'CHICKEN YAKI (NEW)',
            image: '../../../assets/images/CHICKEN-YAKI-(NEW).png',
            price: '39',
            description: 'Boulette de poulet, sauce teriyaki',
            restaurant: 'NIKKEI'
          },
          {
            id: 116,
            name: 'BEEF CHEESE',
            image: '../../../assets/images/BEEF-CHEESE.png',
            price: '45',
            description: 'Bœuf fromage, sauce teriyaki',
            restaurant: 'NIKKEI'
          },
          {
            id: 117,
            image: '../../../assets/images/milkshake.jpg',
            name: 'Milkshake',
            description: 'Un milk-shake est une boisson frappée à base de lait qui se prépare généralement en ajoutant' +
              ' des fruits à du lait',
            price: '20',
            type: 'Declination',
            restaurant: 'NIKKEI',
            declinations: {
              description: 'Parfum',
              values: [
                {
                  id: 299,
                  name: 'Fraise',
                  price: 20,
                },
                {
                  id: 298,
                  name: 'Vanille',
                  price: 30,
                },
                {
                  id: 297,
                  name: 'Chocolat',
                  price: 32,
                },
                {
                  id: 296,
                  name: 'Orange',
                  price: 33,
                }
              ]
            }
          },
          {
            id: 4,
            image: '../../../assets/images/sandwich.jpg',
            name: 'Formule sandwich',
            description: 'Sandwich avec un mélange d\'épices riche en saveurs et en caractère, du poulet et une' +
              ' protion frites.',
            restaurant: 'NIKKEI',
            price: '35',
            formula: {
              categories : [
                {
                  // name: 'Boisson 33 cl',
                  name: 'Choisissez votre boisson',
                  items: ['Eau', 'Coca-cola', 'Fanta', 'Sprite', 'Jus d\'orange']
                },
                {
                  name: 'Choisissez votre sandwich',
                  items: ['Thon', 'Saumon', 'Viande hachée', 'Dinde fumée']
                },
                {
                  name: 'Choisissez votre dessert',
                  items: ['Tarte au citron', 'Brownie', 'Chocolat fondu', 'Fruit de saison'],
                }
              ]
            }
          },
          {
            id: 5,
            image: '../../../assets/images/salade.jpg',
            name: 'Salade à composer',
            description: 'Une salade composée est une recette de cuisine à base de mélange de salade et de composition de divers ingrédients. Variante des assiettes composées, il en existe une multitude de recettes de toutes les cuisines du monde.',
            price: null,
            restaurant: 'NIKKEI',
            compositions: [
              {
                name: 'Salades',
                items: [
                  {
                    name: 'Iceberg',
                    price: 15
                  },
                  {
                    name: 'Romaine',
                    price: 15
                  },
                  {
                    name: 'Roquette',
                    price: 20
                  },
                  {
                    name: 'Mix salade',
                    price: 20
                  }
                ]
              },
              {
                name: 'Féculents et legumineuse',
                items: [
                  {
                    name: 'Quinoa',
                    price: 20
                  },
                  {
                    name: 'Lentilles',
                    price: 15
                  },
                  {
                    name: 'Pates',
                    price: 15
                  },
                  {
                    name: 'Ebly',
                    price: 15
                  }
                ]
              },
              {
                name: 'Sans base',
                items: [
                  {
                    name: 'Sans base',
                    price: 10
                  }
                ]
              },
              {
                name: 'Légumes',
                items: [
                  {
                    name: 'Échalote',
                    price: 5
                  },
                  {
                    name: 'Pommes de terre',
                    price: 5
                  },
                  {
                    name: 'Tomate cerise',
                    price: 5
                  },
                  {
                    name: 'Haricot vert',
                    price: 5
                  },
                  {
                    name: 'Concombre',
                    price: 5
                  },
                  {
                    name: 'Avocat',
                    price: 15
                  },
                  {
                    name: 'Champignons',
                    price: 10
                  },
                ]
              }
            ]
          }
        ]
      },
      {
        name: 'Entrées',
        items: [
          {
            image: '../../../assets/images/p1.png',
            name: 'SALADE DE CHOUX',
            price: '25',
            description: 'Chou et carotte émincé vinaigrette au soja.',
            restaurant: 'NIKKEI'
          },
          {
            image: '../../../assets/images/p2.png',
            name: 'WAKAME SAUMON',
            price: '60',
            description: 'Chou et carotte émincé vinaigrette au soja.',
            restaurant: 'NIKKEI'
          },
          {
            image: '../../../assets/images/p3.png',
            name: 'GAMBAS TEMPURA',
            price: '65',
            description: 'Chou et carotte émincé vinaigrette au soja.',
            restaurant: 'NIKKEI'
          }
        ]
      },
      {
        name: 'Tartare',
        items: [
          {
            name: 'SALMON AVOCADO TARTARE',
            image: '../../../assets/images/SALMON-AVOCADO-TARTARE.png',
            price: '55',
            description: 'Saumon, avocat, sésame, boulette de riz vinaigré, sauce Nikkei servie à part',
            restaurant: 'NIKKEI'
          },
          {
            name: 'TUNA SALMON TARTARE (NEW)',
            image: '../../../assets/images/TUNA-SALMON-TARTARE-(NEW).jpg',
            price: '65',
            description: 'Poisson blanc, mangue, avocat, menthe ciselée, boulette de riz vinaigré, sauce Ponzu servie à part',
            restaurant: 'NIKKEI'
          },
          {
            name: 'CRABE TARTARE',
            image: '../../../assets/images/CRABE-TARTARE.png',
            price: '59',
            description: 'Tartare de crabe, avocat, masago, boulette de riz vinaigré, Mayo épicé',
            restaurant: 'NIKKEI'
          },
        ]
      },
      {
        name: 'Tiradito',
        items: [
          {
            name: 'SALMON TIRADITO',
            image: '../../../assets/images/SALMON-TIRADITO.png',
            price: '55',
            description: '7P. Saumon, oignon, ciboulette, coriandre, sauce nikkei',
            restaurant: 'NIKKEI'
          },
          {
            name: 'TUNA TIRADITO',
            image: '../../../assets/images/TUNA-TIRADITO.png',
            price: '55',
            description: '7P. Thon, poireaux, graines de sésame, sauce Ponzu',
            restaurant: 'NIKKEI'
          },
          {
            name: 'MAHI MAHI TIRADITO',
            image: '../../../assets/images/MAHI-MAHI-TIRADITO.png',
            price: '55',
            description: '7P. Poisson blanc, menthe, graines de sésame, sauce Ponzu',
            restaurant: 'NIKKEI'
          }
        ]
      },
      {
        name: 'Tataki',
        items: [
          {
            name: 'SALMON TATAKI',
            image: '../../../assets/images/SALMON-TATAKI.png',
            price: '50',
            description: '5P. Saumon mi-cuit, sésame, sauce NIKKEI',
            restaurant: 'NIKKEI'
          },
          {
            name: 'TUNA TATAKI',
            image: '../../../assets/images/TUNA-TATAKI.png',
            price: '50',
            description: '5P. Thon mi-cuit, sésame, sauce PONZU',
            restaurant: 'NIKKEI'
          }
        ]
      },
      {
        name: 'Chirashi',
        items: [
          {
            name: 'SALMON CHIRACHI',
            image: '../../../assets/images/SALMON-CHIRACHI.png',
            price: '55',
            description: 'Sashimi saumon, riz vinaigré , sésame, soja sauce',
            restaurant: 'NIKKEI'
          },
          {
            name: 'SALMON AVOCADO CHIRACHI',
            image: '../../../assets/images/SALMON-AVOCADO-CHIRACHI.png',
            price: '60',
            description: 'Sashimi saumon, avocat, riz vinaigré, sésame, soja sauce',
            restaurant: 'NIKKEI'
          },
          {
            name: 'TUNA SALMON CHIRASHI',
            image: '../../../assets/images/TUNA-SALMON-CHIRASHI.jpg',
            price: '60',
            description: 'Sashimi saumon, avocat, riz vinaigré, sésame, soja sauce',
            restaurant: 'NIKKEI'
          },
        ]
      },
      {
        name: 'Yakitori',
        items: [
          {
            name: 'CHICKEN BALL\'S',
            image: '../../../assets/images/CHICKEN-BALLS.png',
            price: '39',
            description: 'Boulette de poulet, sauce teriyaki',
            restaurant: 'NIKKEI'
          },
          {
            name: 'CHICKEN YAKI (NEW)',
            image: '../../../assets/images/CHICKEN-YAKI-(NEW).png',
            price: '39',
            description: 'Boulette de poulet, sauce teriyaki',
            restaurant: 'NIKKEI'
          },
          {
            name: 'BEEF CHEESE',
            image: '../../../assets/images/BEEF-CHEESE.png',
            price: '45',
            description: 'Bœuf fromage, sauce teriyaki',
            restaurant: 'NIKKEI'
          }
        ]
      }
    ]
  }

  restaurantDescriptionOpened = false;
  selectedHeadingIndex = 0;

  constructor(public dialog: MatDialog, private route: ActivatedRoute, private router: Router, public basketService: BasketService) { }

  ngOnInit(): void {
  }

  showRestaurantDescription(): void {
    this.restaurantDescriptionOpened = !this.restaurantDescriptionOpened;
  }

  setSelectedHeadingIndex(selectedIndex: number): void {
    this.selectedHeadingIndex = selectedIndex;
  }

  scrollRight(menuItems: HTMLDivElement): void {
    menuItems.scrollBy({
      left: 150,
      behavior: 'smooth'
    });
  }

  scrollLeft(menuItems: HTMLDivElement): void {
    menuItems.scrollBy({
      left: -150,
      behavior: 'smooth'
    });
  }

  validateBasket(): void {
    this.router.navigate(['/checkout']);
  }

  incrementItemCount(item: Item): void {
    this.basketService.incrementItemCount(item);
  }

  decrementItemCount(item: Item): void {
    this.basketService.decrementItemCount(item);
  }

  removeItem(item: Item): void {
    this.basketService.removeItem(item);
  }

  showDialogDetails(selectedItem: Item): void {
    this.dialog.open(BasketItemDialogComponent, {
      height: window.innerWidth < 500 ? '85%' : '740px',
      width: window.innerWidth < 500 ? '85%' : '400px',
      autoFocus: false,
      data: {
        item: selectedItem
      }
    });
  }
}
