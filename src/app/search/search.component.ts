import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
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

  constructor(private home: HomeService, iconRegistry: MatIconRegistry,
    private router: Router, sanitizer: DomSanitizer) {
      iconRegistry.addSvgIcon(
        'star',
        sanitizer.bypassSecurityTrustResourceUrl('../../assets/img/icon/star.svg'));
     }

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

  onViewSeats(selectedBus) {
    this.home.getSeats(selectedBus);
    this.router.navigate(['seats']);
  }

}
