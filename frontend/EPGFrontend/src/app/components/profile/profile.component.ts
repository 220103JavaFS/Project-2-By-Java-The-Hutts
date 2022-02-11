import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

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
  preferences:FormGroup;

  constructor(fb:FormBuilder) { 
    this.preferences = fb.group({
      education:false, 
      recreational:false,
      social:false,
      diy:false,
      charity:false,
      cooking:false,
      relaxation:false,
      music:false,
      busywork:false
    });
  }

  ngOnInit(): void {
  }
}
