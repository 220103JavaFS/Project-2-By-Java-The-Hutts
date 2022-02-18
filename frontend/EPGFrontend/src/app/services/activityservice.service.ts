import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { eventactivity } from '../models/eventactivity';
import { boredActivity } from '../models/bored';

@Injectable({
  providedIn: 'root'
})

export class ActivityserviceService {

  private boredURL = 'https://www.boredapi.com/api/activity'
  private EPGURL = "http://localhost:8083/data/users/event"

  constructor(private http: HttpClient) {}

  getActivity(): Observable<boredActivity>{
    return this.http.get<boredActivity>(this.boredURL + "/");
  }

  getActByType(type:string): Observable<eventactivity>{
    return this.http.get<eventactivity>(this.boredURL + "?type=" + type)
  }

  getActByPartic(partic:number): Observable<eventactivity>{
    return this.http.get<eventactivity>(this.boredURL + "?participants=" + partic)
  }

  getActByPrice(price:number): Observable<eventactivity>{
    return this.http.get<eventactivity>(this.boredURL + "?price=" + price)
  }

  createActivity(item:eventactivity): Observable<eventactivity>{
    return this.http.post<eventactivity>(this.boredURL,item)
  }

}
