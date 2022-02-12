import { Component, Input, OnInit } from '@angular/core';
import {EVENTS} from '../../mock-event'
import { myevent } from 'src/app/event';
import { ActivityserviceService } from 'src/app/services/activityservice.service';
import { EventserviceService } from 'src/app/services/eventservice.service';
import { eventactivity } from 'src/app/eventactivity';
@Component({
  selector: 'app-cardlist',
  templateUrl: './cardlist.component.html',
  styleUrls: ['./cardlist.component.css']
})
export class CardlistComponent implements OnInit {
  
  //events variable will be set to event service get request
  events:myevent[] = EVENTS;
  toggleNewEvent:boolean = false;

  //stores activity recieved by api
  suggestActivity!:eventactivity;

  //array to display users events
  eventlist!:myevent[]

  //constructor with db connection
  constructor(private eventService:EventserviceService) { }

  ngOnInit(): void {
  }
  toggleEvent(){
    this.toggleNewEvent = !this.toggleNewEvent
  }
}
