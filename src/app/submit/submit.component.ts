import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HomeService } from '../services/home.service';
import { Journey_Route } from '../models/journey.model';

@Component({
  selector: 'submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.css']
})
export class SubmitComponent implements OnInit {
  subscription:Subscription;
  buses:Journey_Route;

  constructor(private home: HomeService) { }

  ngOnInit() {
    this.subscription= this.home.castSeatId.subscribe(
      res=> {
        this.buses = res;
        console.log(this.buses.Fare);
        //this.buses.forEach(f=>f.busname);
        
      }
    )
  }

}
