import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  firstName:string="";
  lastName:string="";
  userName:string="";
  password:string="";
  userEmail:string="";
  userPreferences: []=[];

  constructor() { }

  ngOnInit(): void {
  }

}
