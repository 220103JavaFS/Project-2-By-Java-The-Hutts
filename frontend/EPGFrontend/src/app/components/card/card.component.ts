import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {EVENTS} from '../../mock-event';
import {myevent} from '../../event'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  
  //Event variable to display this cards details
  @Input()
    singleevent!:myevent;
  
  //Send boolean event to parent component on click
  @Output()
  onRemoveClick!:EventEmitter<boolean>;

  constructor() { }
  ngOnInit(): void {}

  //function for event emitter, attempting to close card
  removeClick(){
    this.onRemoveClick.emit();   
  }

 
}
