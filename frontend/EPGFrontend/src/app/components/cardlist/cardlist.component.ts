import { Component, Input, OnInit } from '@angular/core';
import {EVENTS} from '../../mock-event'
import { ActivityserviceService } from 'src/app/services/activityservice.service';
import { eventactivity } from 'src/app/models/eventactivity';
import { EventserviceService } from 'src/app/services/eventservice.service';
@Component({
  selector: 'app-cardlist',
  templateUrl: './cardlist.component.html',
  styleUrls: ['./cardlist.component.css']
})
export class CardlistComponent implements OnInit {
  
  //array to hold eventlist
  events:eventactivity[] = [];
  toggleNewEvent:boolean = false;

  //boolean for hiding a card
  hideevent:boolean = false;

  //stores activity recieved by api
  suggestActivity!:eventactivity;

  //constructor with db connection
  constructor(private eventService:EventserviceService) { }

  ngOnInit(): void {
    this.eventService.getEvent().subscribe((response: eventactivity[])=>{this.events = response});
    this.newCardSubscribe();

  }
  toggleEvent(){
    this.toggleNewEvent = !this.toggleNewEvent
  }

  newCardSubscribe(){
    this.eventService.newcard.subscribe((updated: boolean) =>{
      if(updated){
        this.eventService.getEvent().subscribe((response: eventactivity[])=>{this.events = response});}
      })
  }

  //function to temporarily remove card from users display
  removeCard(title:string){
    for(var i= 0; i < this.events.length; i++){
      if(this.events[i].type === title)
        this.events.splice(i,1);
    }
  }
}
