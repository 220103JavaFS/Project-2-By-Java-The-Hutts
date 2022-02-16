import { Component, Input, OnInit } from '@angular/core';
import {EVENTS} from '../../mock-event'
import { ActivityserviceService } from 'src/app/services/activityservice.service';
import { eventactivity } from 'src/app/eventactivity';
@Component({
  selector: 'app-cardlist',
  templateUrl: './cardlist.component.html',
  styleUrls: ['./cardlist.component.css']
})
export class CardlistComponent implements OnInit {
  
  //events variable will be set to event service get request
  events:eventactivity[] = EVENTS;
  toggleNewEvent:boolean = false;

  //boolean for hiding a card
  hideevent:boolean = false;

  //stores activity recieved by api
  suggestActivity!:eventactivity;

  //array to display users events
  eventlist!:eventactivity[]

  //constructor with db connection
  constructor() { }

  ngOnInit(): void {
  }
  toggleEvent(){
    this.toggleNewEvent = !this.toggleNewEvent
  }

  //function to temporarily remove card from users display
  removeCard(id:number){
    for(var i= 0; i < this.events.length; i++){
      if(this.events[i].id === id)
        this.events.splice(i,1);
    }
  }
}
