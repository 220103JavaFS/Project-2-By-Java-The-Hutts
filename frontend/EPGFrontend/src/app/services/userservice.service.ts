import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, JsonpClientBackend} from '@angular/common/http';
import { user } from '../models/user'
@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  private local = 'https://localhost:6000/users/'
  private local2 = 'http://localhost:8083/data/users'

  constructor(private http: HttpClient) { }

  createUser(thisuser:user):Observable<user>{
    return this.http.post<user>(this.local2 +'/registration',thisuser);
  }

  getUserByID(id:number):Observable<any>{
    return this.http.get<number>(this.local + id);
  }

  getUserByUsername(name:string):Observable<any>{
    return this.http.get<string>(this.local + name);
  }

  getUserByEmail(email:string):Observable<any>{
    return this.http.get<string>(this.local + email);
  }
  
}
