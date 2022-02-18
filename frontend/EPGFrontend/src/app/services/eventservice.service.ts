import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {myevent} from '../event';
import { getEventClassNames } from '@fullcalendar/angular';

@Injectable({
  providedIn: 'root'
})
export class EventserviceService {

  private local = 'http://localhost:8083/data/users'


  constructor(private http: HttpClient) { }

  createEvent(thisevent:myevent):Observable<myevent>{
    return this.http.post<myevent>(this.local + "/event", thisevent);
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
