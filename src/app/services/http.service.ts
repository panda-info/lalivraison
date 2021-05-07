import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {
  }

  getSwiperImages(): Observable<string[]> {
    // return this.http.get<string[]>('api/home/swiper-image');
    return this.http.get<string[]>('api/banners/read');
  }

  getCategories(): Observable<any[]> {
    // return this.http.get<string[]>('api/home/categories');
    return this.http.get<string[]>('api/categories/read');
  }

  getCities(): Observable<any[]> {
    // return this.http.get<string[]>('api/home/cities');
    return this.http.get<string[]>('api/locations/read');
  }

  getRestaurants(category: string, page: number, city?: string, cityPage?: number): Observable<any[]> {
    // return this.http.get<string[]>(`api/home/restaurants?category=${category}&page=${page}&pageSize=${pageSize}`);
    let url = `api/restaurants/read?category=${category}&page=${page}`;
    if (cityPage) {
      url += `&city=${city}&cityPage=${cityPage}`;
    }
    return this.http.get<string[]>(url);
  }

  getRestaurant(restaurantId: string, districtId: string): Observable<any> {
    // let url = `api/restaurant?restaurantId=${restaurantId}`;
    // if (districtId) {
    //   url += `&districtId=${districtId}`;
    // }
    return this.http.get<any>(`api/Restaurant_Menu/read?restaurant_id=${restaurantId}`);
  }

  postNewsLetter(email: any): Observable<any> {
    return this.http.post<any>('api/newsletter/create', email);
  }

  getOrderStatus(orderId: string): Observable<any[]> {
    // return this.http.get<string[]>(`api/suivi-commande/${orderId}`);
    return this.http.get<string[]>(`api/suivicommande/read?id_commande=${orderId}`);
  }

  getOrderStatusSummary(orderId: string): Observable<any[]> {
    // return this.http.get<string[]>(`api/suivi-commande/${orderId}/summary`);
    return this.http.get<string[]>(`api/suivicommande/summary?id_commande=${orderId}`);
  }

  postPartner(partner: any): Observable<any> {
    return this.http.post<any>('api/dpartenaire/create', partner);
  }

  postDelivrer(delivrer: any): Observable<any> {
    // return this.http.post<any>('api/devenir-livreur', delivrer);
    return this.http.post<any>('api/dlivreur/create', delivrer);
  }

  postCheckout(checkout: any): Observable<any> {
    // return this.http.post<any>('api/checkout', checkout);
    return this.http.post<any>('api/checkout/create', checkout);
  }
}
