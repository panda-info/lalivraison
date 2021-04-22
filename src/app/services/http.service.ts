import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {
  }

  getSwiperImages(): Observable<string[]> {
    return this.http.get<string[]>('api/home/swiper-image');
  }

  getCategories(): Observable<any[]> {
    return this.http.get<string[]>('api/home/categories');
  }

  getCities(): Observable<any[]> {
    return this.http.get<string[]>('api/home/cities');
  }

  getRestaurants(category: string, page: number, pageSize: number): Observable<any[]> {
    return this.http.get<string[]>(`api/home/restaurants?category=${category}&page=${page}&pageSize=${pageSize}`);
  }

  getRestaurant(restaurantId: string, districtId: string): Observable<any> {
    let url = `api/restaurant?restaurantId=${restaurantId}`;
    if (districtId) {
      url += `&districtId=${districtId}`;
    }
    return this.http.get<any>(url);
  }

  getOrderStatus(orderId: string): Observable<any[]> {
    return this.http.get<string[]>(`api/suivi-commande/${orderId}`);
  }

  getOrderStatusSummary(orderId: string): Observable<any[]> {
    return this.http.get<string[]>(`api/suivi-commande/${orderId}/summary`);
  }

  postPartner(partner: any): Observable<any> {
    return this.http.post<any>('api/devenir-partenaire', partner);
  }

  postDelivrer(delivrer: any): Observable<any> {
    return this.http.post<any>('api/devenir-livreur', delivrer);
  }

  postCheckout(checkout: any): Observable<any> {
    return this.http.post<any>('api/checkout', checkout);
  }
}
