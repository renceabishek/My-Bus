import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  constructor(private http: HttpClient) { }

  getLocation(): Observable<any> {
    return this.http.get('./assets/mockdata/location.json');
  }
}
