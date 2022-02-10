import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    dateClick: this.handleDateClick.bind(this),
    events: [
      { title: 'Hiking', date: '2022-02-09' },
      { title: 'Laundary', date: '2022-02-10' },
      { title: 'Study', date: '2022-02-10' }
    ]

  };

  handleDateClick(arg: { dateStr: string; }) {
    alert(arg.dateStr)
  }

}
