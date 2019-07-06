import { Component, OnInit } from '@angular/core';
import { HomeService } from '../services/home.service';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { startWith, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  //form variables
  pickup = new FormControl();
  drop = new FormControl();
  startdate: any;

  locations: string[] = [];
  fromLoc: Observable<string[]>;
  toLoc: Observable<string[]>;

  constructor(private home: HomeService, private router:Router) { }

  ngOnInit() {
    console.log("home componenet called");
    this.home.getLocation().subscribe(data => {
      this.locations = data;
      this.fromLoc = this.pickup.valueChanges
        .pipe(
          startWith(''),
          map(value => this.locationFilter(value))
        );
      this.toLoc = this.drop.valueChanges
        .pipe(
          startWith(''),
          map(value => this.locationFilter(value))
        );
    })
  }

  locationFilter(value): string[] {
    return this.locations.filter(row => row.toLowerCase().includes(value.toLowerCase()));
  }

  SearchBus() {
    console.log(this.pickup.value)
    console.log(this.drop.value)
    //this.home.getSearchLocation().subscribe(data=>);
    //localStorage.setItem("route", JSON.stringify(route))
    this.router.navigate(['search']);
  }
}
