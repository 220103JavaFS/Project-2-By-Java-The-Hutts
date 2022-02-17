import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {EVENTS} from '../../mock-event';
import { eventactivity } from 'src/app/models/eventactivity';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  
  //Event variable to display this cards details
  @Input()
    singleevent!:eventactivity;
  
  //Send boolean event to parent component on click
  @Output()
  onRemoveClick:EventEmitter<number> = new EventEmitter;

  constructor() { }
  ngOnInit(): void {}

  //function for event emitter, attempting to close card
  removeClick(id:number){
    this.onRemoveClick.emit(id);   
  }

 
}
