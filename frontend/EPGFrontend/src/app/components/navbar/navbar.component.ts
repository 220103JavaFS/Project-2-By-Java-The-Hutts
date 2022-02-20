import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private service: AuthService,private router: Router) { }

  examplevar:string = 'text';

  ngOnInit(): void {
  }

  loggedIn(){
    return sessionStorage.getItem('username');
  }

  onLogout() {
    this.service.logout();
    this.router.navigate(['/']);
  }
}
