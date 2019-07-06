import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  constructor(private http: HttpClient) { }

  private routeId= new BehaviorSubject <string> (''); 
    castId=this.routeId.asObservable();

  getLocation(): Observable<any> {
    return this.http.get('./assets/mockdata/location.json');
  }

  getSearchLocation(): Observable<any> {
    return this.http.get('./assets/mockdata/search.json');
  }
}
