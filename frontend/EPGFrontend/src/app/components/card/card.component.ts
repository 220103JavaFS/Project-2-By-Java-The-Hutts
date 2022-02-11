import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {EVENTS} from '../../mock-event';
import {myevent} from '../../event'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  editNote:boolean = false;

  @Input()
    singleevent!:myevent;
  @Input()
    newNote!:string;
  @Output()
    onClick!:EventEmitter<any>;

  today:number = Date.now()

  constructor() { }


  ngOnInit(): void {
    //Initialize event to get from service layer
  }

  addNote(newnote:string){
    (newnote);
  }

  toggleEdit(){
    if(this.editNote === false)
      this.editNote=true;
    else
      this.editNote=false;
  }

}
