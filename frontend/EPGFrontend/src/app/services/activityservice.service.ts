import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { eventactivity } from '../eventactivity';

@Injectable({
  providedIn: 'root'
})

export class ActivityserviceService {

  private boredURL = 'https://www.boredapi.com/api/activity'


  constructor(private http: HttpClient) {}

  getAct(): Observable<eventactivity>{
    return this.http.get<eventactivity>(this.boredURL + "/");
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

}
