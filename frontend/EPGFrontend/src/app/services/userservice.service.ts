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
    return this.http.post<user>('http://localhost:8083/data/users/registration',thisuser);
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

  addUser(user: user){
    let users =[];
    if (localStorage.getItem('Users')){
      users = JSON.parse(localStorage.getItem('Users') || '{}');
      users = [user, ...users];
    } else {
      users = [user];
    }
    localStorage.setItem('Users', JSON.stringify(users));
  }
  
}
