import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { users } from '../users'
@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  private local = 'https://localhost:8083/data/users/'

  constructor(private http: HttpClient) { }

  createUser(thisuser:users):Observable<users[]>{
    return this.http.post<users[]>(this.local,thisuser);
  }

  getUserByID(id:number){
    return this.http.get<users>(this.local + id);
  }

  getUserByUsername(name:users)/*:Observable<any>*/{
    return this.http.get<users>(this.local + name);
  }

  // getUserByEmail(email:users):Observable<any>{
  //   return this.http.get<users>(this.local + email);
  // }

  
}
