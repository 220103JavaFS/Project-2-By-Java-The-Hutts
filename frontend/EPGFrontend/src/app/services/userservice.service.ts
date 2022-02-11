import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { users } from '../users'
@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  private local = 'https://localhost:6000/users/'

  constructor(private http: HttpClient) { }

  createUser(thisuser:users):Observable<users>{
    return this.http.post<users>(this.local,thisuser);
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
