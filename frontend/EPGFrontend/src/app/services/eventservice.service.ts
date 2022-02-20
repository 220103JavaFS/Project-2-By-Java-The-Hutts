import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { getEventClassNames } from '@fullcalendar/angular';
import { eventactivity } from '../models/eventactivity';

@Injectable({
  providedIn: 'root'
})
export class EventserviceService {

  private local = 'http://localhost:8083/data/users'
  public newcard!: Subject<boolean>;
  
  constructor(private http: HttpClient) {
    this.newcard = new Subject<boolean>();
   }
  
  createEvent(thisevent:eventactivity):Observable<eventactivity>{
    // const headers = new HttpHeaders()
    return this.http.post<eventactivity>(this.local + "/addevent/" + sessionStorage.getItem('username'), thisevent);
  }

  getEvent():Observable<eventactivity[]>{
    return this.http.get<eventactivity[]>(this.local + "/myevents/" + sessionStorage.getItem('username'));
  }

//   getEventByID(id:number): Observable<any>{
//     return this.http.get<number>(this.local + "/path/" + id);
//   }

//   //userId as input
//   getAllUsersEvents(id:number): Observable<myevent[]>{
//     return this.http.get<myevent[]>(this.local + "/path/" + id);
//   }

//   //event status as input
//   getEventByStatus(status:boolean):Observable<any>{
//     return this.http.get<number>(this.local +"/path/" + status);
//   }
}
