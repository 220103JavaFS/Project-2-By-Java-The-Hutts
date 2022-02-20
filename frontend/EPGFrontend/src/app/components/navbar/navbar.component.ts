import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private _router: Router) { }

  examplevar:string = 'text';

  ngOnInit(): void {
  }

  loggedIn(){
    return sessionStorage.getItem('username');
  }

  onLogout() {
    sessionStorage.removeItem('username');
    this._router.navigate([''])
  }
}
