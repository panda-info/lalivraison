import {Component, Input, OnInit} from '@angular/core';

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
    image: '../../../assets/images/nikkei.png',
    subImage: '../../../assets/images/nikkei-logo.png',
    name: 'NIKKEI.MA',
    kitchenType: 'Cuisine Nippone',
    orderFreeMinPrice: '140',
    phoneNumber: '05 22 99 48 77',
    openTime: '11',
    closeTime: '22',
    description: 'NIKKEI met un point d\'honneur à développer une large gamme de sushis, de plateaux...',
    headings: [
      {
        name: 'Entrées',
        items: [
          {
            image: '../../../assets/images/p1.png',
            name: 'SALADE DE CHOUX',
            price: '25',
            description: 'Chou et carotte émincé vinaigrette au soja.'
          },
          {
            image: '../../../assets/images/p2.png',
            name: 'WAKAME SAUMON',
            price: '60',
            description: 'Chou et carotte émincé vinaigrette au soja.'
          },
          {
            image: '../../../assets/images/p3.png',
            name: 'GAMBAS TEMPURA',
            price: '65',
            description: 'Chou et carotte émincé vinaigrette au soja.'
          },
          {
            image: '../../../assets/images/p1.png',
            name: 'SALADE DE CHOUX',
            price: '25',
            description: 'Chou et carotte émincé vinaigrette au soja.'
          },
          {
            image: '../../../assets/images/p2.png',
            name: 'WAKAME SAUMON',
            price: '60',
            description: 'Chou et carotte émincé vinaigrette au soja.'
          },
          {
            image: '../../../assets/images/p3.png',
            name: 'GAMBAS TEMPURA',
            price: '65',
            description: 'Chou et carotte émincé vinaigrette au soja.'
          },
          {
            image: '../../../assets/images/p1.png',
            name: 'SALADE DE CHOUX',
            price: '25',
            description: 'Chou et carotte émincé vinaigrette au soja.'
          },
          {
            image: '../../../assets/images/p2.png',
            name: 'WAKAME SAUMON',
            price: '60',
            description: 'Chou et carotte émincé vinaigrette au soja.'
          },
          {
            image: '../../../assets/images/p3.png',
            name: 'GAMBAS TEMPURA',
            price: '65',
            description: 'Chou et carotte émincé vinaigrette au soja.'
          },
          {
            image: '../../../assets/images/p1.png',
            name: 'SALADE DE CHOUX',
            price: '25',
            description: 'Chou et carotte émincé vinaigrette au soja.'
          },
          {
            id: 3,
            image: '../../../assets/images/milkshake.jpeg',
            name: 'Milkshake',
            price: '20',
            declinations: {
              description: 'Parfum',
              values: [
                {
                  id: 299,
                  name: 'Fraise',
                  price: 40,
                },
                {
                  id: 298,
                  name: 'Vanille',
                  price: 30,
                },
                {
                  id: 298,
                  name: 'Chocolat',
                  price: 32,
                }
              ]
            }
          },
          {
            id: 4,
            image: '../../../assets/images/formule.jpg',
            name: 'Formule sandwich',
            price: '35',
            formula: [
              {
                category: 'Boisson 33 cl',
                items: ['Eau', 'Coca-cola', 'Fanta', 'Sprite', 'Jus d\'orange']
              },
              {
                category: 'Sandwich',
                items: ['Thon', 'Saumon', 'Viande hachée', 'Dinde fumée']
              },
              {
                category: 'Dessert',
                items: ['Tarte au citron', 'Brownie', 'Chocolat fondu', 'Fruit de saison'],
              }
            ]
          }
        ]
      },
      {
        name: 'Yakitori',
        content: []
      },
      {
        name: 'Tartare',
        content: []
      },
      {
        name: 'Sashimi',
        content: []
      },
      {
        name: 'Tataki',
        content: []
      },
      {
        name: 'Entrées',
        content: []
      },
      {
        name: 'Yakitori',
        content: []
      },
      {
        name: 'Tartare',
        content: []
      },
      {
        name: 'Sashimi',
        content: []
      },
      {
        name: 'Tataki',
        content: []
      },
      {
        name: 'Entrées',
        content: []
      },
      {
        name: 'Yakitori',
        content: []
      },
      {
        name: 'Tartare',
        content: []
      },
      {
        name: 'Sashimi',
        content: []
      },
      {
        name: 'Tataki',
        content: []
      }
    ]
  }

  restaurantDescriptionOpened = false;
  selectedHeadingIndex = 0;

  constructor() { }

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
}
