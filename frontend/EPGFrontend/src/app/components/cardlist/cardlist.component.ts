import { Component, Input, OnInit } from '@angular/core';
import {EVENTS} from '../../mock-event'
import { myevent } from 'src/app/event';

@Component({
  selector: 'app-cardlist',
  templateUrl: './cardlist.component.html',
  styleUrls: ['./cardlist.component.css']
})
export class CardlistComponent implements OnInit {
  
  //events variable will be set to event service get request
  events:myevent[] = EVENTS;
  toggleNewEvent:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  toggleEvent(){
    this.toggleNewEvent = !this.toggleNewEvent
  }
}
