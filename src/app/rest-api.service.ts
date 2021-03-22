import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UserAuthenticationService} from './user-authentication.service';
import {Product} from './models/Product';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {
  authenticatedUser: any;

  constructor(private http: HttpClient, private userAuthenticationService: UserAuthenticationService) {
    this.userAuthenticationService.sharedAuthenticatedUser.subscribe(authenticatedUser => this.authenticatedUser = authenticatedUser);
  }

  public login(username: string, password: string): Observable<any> {
    const headers = new HttpHeaders({Authorization: 'Basic ' + btoa(username + ':' + password)});
    return this.http.get('http://localhost:8080/', {headers, responseType: 'json'});
  }

  public getProducts(): Observable<any> {
    return this.http.get('http://localhost:8080/products', {responseType: 'json'});
  }

  public changePassword(password: string): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: 'Basic ' + btoa(this.authenticatedUser.username + ':' + this.authenticatedUser.password)
    });
    const body = { username: this.authenticatedUser.username, password };
    return this.http.put('http://localhost:8080/admin', body, {headers, responseType: 'json'});
  }

  public addProduct(product: Product): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: 'Basic ' + btoa(this.authenticatedUser.username + ':' + this.authenticatedUser.password)
    });
    const body = { name: product.name, description: product.description, price: product.price };
    return this.http.post('http://localhost:8080/product', body, {headers, responseType: 'json'});
  }

  public deleteProduct(productId: number): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: 'Basic ' + btoa(this.authenticatedUser.username + ':' + this.authenticatedUser.password)
    });

    return this.http.delete('http://localhost:8080/product/' + productId, {headers, responseType: 'json'});
  }
}
