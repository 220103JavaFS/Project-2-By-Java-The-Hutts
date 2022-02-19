import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { user } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService,
              private  router: Router) { }

  ngOnInit(): void {
  }

  onLogin(loginForm: NgForm) {
    console.log(loginForm.value);
    
    this.authService.authUser(loginForm.value).subscribe(
      (response:user)  => {
        console.log(response);
        const user = response;
        sessionStorage.setItem('username',user.username);
        this.router.navigate(['/']);

      }
    )
    // if(token) {
    //   localStorage.setItem('token', loginForm.value.username);
    //   console.log('Login Successful');
    //   this.router.navigate(['/']);
    // } else {
    //   console.log('Login Failed');
    // }
  }

}
