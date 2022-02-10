import { Component, Input, OnInit, Output } from '@angular/core';
import {event} from '../../event';
import {users} from '../../users';
import { EventserviceService } from 'src/app/services/eventservice.service';
// import {MatDatepickerModule} from '@angular/material/datepicker';

@Component({
  selector: 'app-newcard',
  templateUrl: './newcard.component.html',
  styleUrls: ['./newcard.component.css']
})
export class NewcardComponent implements OnInit {
  
  name!:string;
  date!:Date;
  notes!:string;
  status:boolean = false;
  startTime!:string;
  endTime!:string;
  participants!: users[];

  // @Input()
  // newevent!:event;
  // @Output()
  // neweventChange!:event;

  constructor(private myservice:EventserviceService) { }

  ngOnInit(): void {
  }

  myfunc(){
    console.log(this.name);
    console.log(this.date);
  }
}
