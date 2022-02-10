import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EventserviceService {

  constructor(private http: HttpClient) { 

    //get event data from backend
    //getEventDAta http 

  }
}
