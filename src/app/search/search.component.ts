import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HomeService } from '../services/home.service';
import { Journey_Route } from '../models/journey.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  subscription:Subscription;
  arrJourney: String[];
  buses:Journey_Route[]=[];

  constructor(private home: HomeService) { }

  ngOnInit() {
    this.subscription= this.home.castId.subscribe(
      res=>this.getAllBus(res)
    )
  }

  getAllBus(res){
    let bus=new Object();
    
    
    this.home.fetchSearchLocation(res)
    .subscribe(
      res=>{
        //console.log(res.data)
        
        this.buses = res.data;
        // this.arrJourney = res.data as string [];
        // var obj=JSON.parse(JSON.stringify(res));
        // console.log(res.data[0].busname);
        
        
      }
    )

  }

}
