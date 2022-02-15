import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onLogin(loginForm: NgForm) {
    console.log(loginForm.value);
    //returns value stored in local storage
    const token = this.authService.authUser(loginForm.value);
    if(token) {
      localStorage.setItem('token', token.username);
      console.log('Login Successful');
    } else {
      console.log('Login Failed');
    }
  }

}
