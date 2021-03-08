import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {MatDialog} from '@angular/material/dialog';
import {BasketItemDialogComponent} from '../basket-page/basket-page-item/basket-item-dialog/basket-item-dialog.component';

@Component({
  selector: 'app-location-chooser',
  templateUrl: './location-chooser.component.html',
  styleUrls: ['./location-chooser.component.scss']
})
export class LocationChooserComponent implements OnInit {
  city: string;
  district: string;

  myControl = new FormControl();
  cities = [
    {
      name: 'Casablanca',
      districts: ['Maarif', 'Beauséjour', 'Ferme Bretonne', 'Hay tissir', 'Zone CFC', 'Riviera',
        'CIL- longchamp-Quartier El Hana', 'Oasis', 'Route el jadida - les facultés', 'France Ville',
        'Racine', 'Derb Ghalef', 'Palmier', 'Anfa', 'Bachkou']
    },
    {
      name: 'Rabat',
      districts: ['Agdal haut', 'Al sabah', 'Alfath', 'Amal 2', 'Amal 3', 'Amal 6',
        'Ambassadeurs', 'Ancienne Medina', 'Aviation', 'Belle vue 1',
        'Belle vue 2', 'Bir kacem', 'Bouitate', 'centre ville', 'Chbanat']
    },
    {
      name: 'Marrakech',
      districts: ['Azzouzia', 'Palmeraie village 2/ SoGen', 'Assada', 'Al Massar', 'Amerchich',
        'Jardins de la Palmeraie', 'Sidi Ghanem Zone Industrielle', 'Al Izdihar', 'Issil', 'Mabrouka',
        'Koutoubia', 'Daoudiat', 'Assif', 'Sidi Abad', 'Mesmoudi']
    },
    {
      name: 'Fès',
      districts: ['Bouramana']
    }
  ];

  districts: string[] = []
  // options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]>;

  constructor(public dialog: MatDialog) {

  }

  ngOnInit(): void {
    // this.filteredOptions = this.myControl.valueChanges
    // .pipe(
    //   startWith(''),
    //   map(value => this._filter(value))
    // );

    // if (navigator.geolocation) {
    //   navigator.geolocation.getCurrentPosition((location => console.log('@@@@@@@@@@@@@@@@', location)));
    // }
  }

  // private _filter(value: string): string[] {
  //   const filterValue = value.toLowerCase();
  //
  //   return this.cities.filter(option => option.toLowerCase().includes(filterValue));
  // }

  filterCities(): void {
    // console.log('§§§§§§§§§§§§§§§')
    // this.filteredOptions = this.myControl.valueChanges
    // .pipe(
    //   startWith(''),
    //   map(value => this._filter(value))
    // );
  }

  getCities(): string[] {
    return this.cities.map(city => city.name);
  }

  getDistricts(): string[] {
    if (this.city) {
      return this.cities.filter(city => city.name === this.city)[0].districts;
    }
  }

  handleCityChange(): void {
    this.district = this.cities.filter(city => city.name === this.city)[0].districts[0];
  }

  getLocation(): void {
    if (navigator.geolocation) {



      // navigator.geolocation.getCurrentPosition(successCallback,errorCallback,{timeout:10000});









      console.log(navigator.geolocation);
      navigator.geolocation.getCurrentPosition(z => {
        console.log('mmmmmmmmmmm', z.coords.latitude, z.coords.longitude);


        this.dialog.open(BasketItemDialogComponent, {
          data: {
            text: 'OK'
          }
        });




      }, (x => {
      //   this.dialog.open(BasketItemDialogComponent, {
      //   data: {
      //     item: x
      //   }
      // }
      // );
      }
      ), {maximumAge: 60000, timeout: 5000, enableHighAccuracy: true});
    }
  }
}
