import { Injectable } from '@angular/core';
import { HttpClient, JsonpClientBackend} from '@angular/common/http';
import { user } from '../models/user'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private local = 'http://localhost:8083/data/users'

  constructor(private http: HttpClient) { }

  // authUser(user: any){
  //   let UserArray = [];
  //   if(localStorage.getItem('Users')) {
  //     UserArray = JSON.parse(localStorage.getItem('Users')||'{}');
  //   }
  //   return UserArray.find((p: { username: any; password: any; }) => p.username === user.username && p.password === user.password);
  // }

  authUser(users:user):Observable<user>{
    let body = {
      "username":users.username,
      "password":users.password
    }
    return this.http.post<user>(this.local + '/login',body);
  }
}
