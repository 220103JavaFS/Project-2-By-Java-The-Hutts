import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import {user} from '../../models/user';
import { ActivityserviceService } from 'src/app/services/activityservice.service';
import { Observable, Subscriber } from 'rxjs';
import { eventactivity } from 'src/app/models/eventactivity';
import { EventserviceService } from 'src/app/services/eventservice.service';
import { boredActivity } from 'src/app/models/bored';
// import {MatDatepickerModule} from '@angular/material/datepicker';

@Component({
  selector: 'app-newcard',
  templateUrl: './newcard.component.html',
  styleUrls: ['./newcard.component.css']
})
export class NewcardComponent implements OnInit {
  
  //variables needed for card and suggested activity
  name!:string;
  date!:string;
  description!:string;
  status:boolean = false;
  startTime!:string;
  endTime!:string;

  //variables for choosing random date
  dd!:string;
  thisdate:Date = new Date();
  day:number = this.thisdate.getDate();
  mm:string = String(this.thisdate.getMonth() + 1).padStart(2, '0');
  yyyy:string=String(this.thisdate.getFullYear());

 //structure to hold eventactivity from request to bored api
 event!:eventactivity;
 bored!:boredActivity;

 //send myevent type to bored api
 @Output()
   onSuggestEvent: EventEmitter<eventactivity> = new EventEmitter;


  //function to randomize the date for suggested activity
  randomizeDay(min:number,max:number){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)+min);
  }
 
  constructor(private service1:ActivityserviceService, private service2:EventserviceService) {}

  ngOnInit(): void {}

  //call api and set current event values to those recieved.
  suggestEvent(){
    this.service1.getActivity().subscribe((boredActivity) =>(this.bored = boredActivity))
    this.name = this.bored.type;
    this.description = this.bored.activity;
    this.dd = String(this.randomizeDay(this.day,30)).padStart(2,'0');
    this.date = "" + this.yyyy + "-" + this.mm + "-" + this.dd
  console.log(this.thisdate)
  }
  
  submitEvent(){
    //call event service and post to db
    let newcard:eventactivity ={
      createdByID:0,
      type:this.name,
      date:this.thisdate,
      activity:this.description,
      status:true,
      startTime:this.startTime,
      endTime:"",
    }
    this.service2.createEvent(newcard).subscribe((eventactivity)=>(newcard = eventactivity));
  }
}
