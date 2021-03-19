import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  constructor(private http: HttpClient) { }

  public login(username: string, password: string): Observable<any> {
    const headers = new HttpHeaders({Authorization: 'Basic ' + btoa(username + ':' + password)});
    return this.http.get('http://localhost:8080/', {headers, responseType: 'json'});
  }

  public getProducts(): Observable<any> {
    const headers = new HttpHeaders({Authorization: 'Basic ' + btoa('admin:123')});
    return this.http.get('http://localhost:8080/products', {headers, responseType: 'json'});
  }
}
