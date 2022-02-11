import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  firstName:string="test";
  lastName:string="user";
  userName:string="testUser";
  password:string="testpw";
  userEmail:string="test@test.com";
  userPreferences: []=[];

  constructor() { }

  ngOnInit(): void {
  }

}
