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
  

  constructor(private home: HomeService) { }

  ngOnInit() {
    
  }

  Seat(value){

  }

}
