import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HomeService } from '../services/home.service';
import { Journey_Route } from '../models/journey.model';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.css']
})
export class SubmitComponent implements OnInit {
  subscription:Subscription;
  buses:Journey_Route;
  boardingform: FormGroup;
  droppingForm: FormGroup;
  droppingList = [];
  boardingList = [];
  board:  String;
  drop: String;
  hide: boolean;

  constructor(private home: HomeService,private fb: FormBuilder) { }

  ngOnInit() {
    this.subscription= this.home.castSeatId.subscribe(
      res=> {
        this.buses = res;
        console.log(this.buses.Fare);
        //this.buses.forEach(f=>f.busname);
        
      }
    );
    this.boardingform = this.fb.group({
      board: ['', [Validators.required, ]]
  });
  this.droppingForm = this.fb.group({
      drop: ['', [Validators.required, ]]
  });
  this.droppingList.push("Perungalathur");
  this.droppingList.push("Tambaram");
  this.droppingList.push("SRM");
  this.droppingList.push("Vandaloor");
  this.droppingList.push("Chengalpattu");

  this.boardingList.push("New Bus Stand");
  this.boardingList.push("Street 1");
  this.boardingList.push("Street 2");

  this.hide=true;
  }

  doContinue() {
    this.hide=false;
  }

  doDroppingForm(value,valid) {

  }

  doBoardingForm(value,valid) {

  }

}
