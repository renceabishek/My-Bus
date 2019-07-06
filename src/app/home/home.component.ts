import { Component, OnInit } from '@angular/core';
import { HomeService } from '../services/home.service';
import { FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { startWith, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { UtilService } from '../services/util.service';

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

  constructor(
    private home: HomeService,
    private route: ActivatedRoute,
    private router: Router,
    private util: UtilService
  ) { }

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
    let valid = this.validateForm();
    if (!valid) return false;
    let date = this.formatDate(this.startdate);
    this.router.navigate(['search', { pickup: this.pickup.value, drop: this.drop.value, date }]);
  }
  validateForm(): Boolean {
    if (!this.pickup.value || !this.drop.value || !this.startdate) {
      this.util.openSnackBar('Enter all the values', 'Dismiss', 3000);
      return false;
    }
    if (this.pickup.value == this.drop.value) {
      this.util.openSnackBar('Departure and destination place are same', 'Dismiss', 3000);
      return false;
    }
    return true;
  }
  formatDate(_date) {
    var d = _date,
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
  }
}
