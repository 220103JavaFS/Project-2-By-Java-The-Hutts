import { Component, Input, OnInit, Output } from '@angular/core';
import {myevent} from '../../event';
import {users} from '../../users';
import { EventserviceService } from 'src/app/services/eventservice.service';
import { ActivityserviceService } from 'src/app/services/activityservice.service';
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

  constructor(private service1:ActivityserviceService) { }

  ngOnInit(): void {
  }

  submitEvent(){
    //eventservice post request here.
  }

  suggestEvent(){
    return this.service1.getActivity();
  }
}
