import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HomeService } from '../services/home.service';
import { Journey_Route } from '../models/journey.model';

@Component({
  selector: 'seats',
  templateUrl: './seats.component.html',
  styleUrls: ['./seats.component.css']
})
export class SeatsComponent implements OnInit {
  subscription:Subscription;
  buses:Journey_Route[]=[];

  constructor(private home: HomeService) { }

  ngOnInit() {
    this.subscription= this.home.castSeatId.subscribe(
      res=> {
        this.buses = res.data;
        //this.buses.forEach(f=>f.busname);
        
      }
    )
  }

}
