import { Component, Input, OnInit, Output } from '@angular/core';
import { event } from 'src/app/event';
import { eventactivity } from 'src/app/eventactivity';
import { ActivityserviceService } from 'src/app/services/activityservice.service';

@Component({
  selector: 'app-newcard',
  templateUrl: './newcard.component.html',
  styleUrls: ['./newcard.component.css']
})
export class NewcardComponent implements OnInit {

  @Input()
  newevent!:event;
  @Output()
  newEventChange!:event;

  constructor(private suggest:ActivityserviceService) { }

  ngOnInit(): void {
  }

  //function to get suggested activity and pop up menu

}
