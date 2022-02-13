import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserserviceService } from 'src/app/services/userservice.service';
import { UserPreferences } from 'src/app/user-preferences';
import { users } from 'src/app/users';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  UserId:number = 0;
  newUserFName:string = '';
  newUserLName:string = '';
  newUsername:string = '';
  newPassword:string = '';
  newEmail:string = '';
  newUser:users[] = [];


  constructor(private us:UserserviceService){ }

  ngOnInit(): void {
  //   this.getUserProfileById(this.UserId);
  // }

  // getUserProfileById(id:number){
  //   this.us.getUserByID(id).subscribe(
  //     (response: users[]) => {
  //       this.newUser = response;
  //     }
  //   )
  }

  sendUsers(){
    let u = new users(0, this.newUserFName, this.newUserLName, this.newUsername, this.newEmail, this.newPassword, [])
    this.us.createUser(u).subscribe(
      (response: users[]) => {
        this.newUser = response;
      }
    )
  }
}








  // firstName:string="test";
  // lastName:string="user";
  // userName:string="testUser";
  // password:string="testpw";
  // userEmail:string="test@test.com";
  // preferences:FormGroup;

  // constructor(fb:FormBuilder) { 
  //   this.preferences = fb.group({
  //     education:false, 
  //     recreational:false,
  //     social:false,
  //     diy:false,
  //     charity:false,
  //     cooking:false,
  //     relaxation:false,
  //     music:false,
  //     busywork:false
  //   });
  // }