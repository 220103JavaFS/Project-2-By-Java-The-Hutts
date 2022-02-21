import { Component, OnInit } from '@angular/core';
import { user } from 'src/app/models/user';
import { preference } from 'src/app/models/preference';
import { UserserviceService } from 'src/app/services/userservice.service';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  getPreference(){
    this.preferenceList=[
    {id:0,name:"educational",selected:false},
    {id:1,name:"recreational",selected:false},
    {id:2,name:"social",selected:false},
    {id:3,name:"diy",selected:false},
    {id:4,name:"charity",selected:false},
    {id:5,name:"cooking",selected:false},
    {id:6,name:"relaxation",selected:false},
    {id:7,name:"music",selected:false},
    {id:8,name:"busywork",selected:false}
    ]}

    loggedInUser: user = {
      firstname:'',
      lastname:'',
      email:'',
      username:'',
      password:'',
      userPreferences: ['']
    };

    firstname!:string;
    lastname!:string;
    email!:string;
    username!:string;
    password!:string;
    preferenceList!:preference[];
    

  constructor(private userService: UserserviceService, private authService: AuthService){
  }

  ngOnInit(): void {
    this.userLoggedIn();
    this.getPreference();
  }

  onChange(){
    console.log(this.preferenceList)
  }

  userLoggedIn() {
    this.userService.getUserByUsername(sessionStorage.getItem("username")||'').subscribe({
      next: (data:user)=>{
        this.loggedInUser = data;
        console.log(this.loggedInUser)
        return this.loggedInUser;
      },
      error:()=>{console.log("failed to get user data")}
    });

  }
  
  onSubmit() {
    let updatedUser: user = {
      firstname:this.loggedInUser.firstname,
      lastname:this.loggedInUser.lastname,
      email:this.loggedInUser.email,
      username:this.loggedInUser.username,
      password:this.loggedInUser.password,
      userPreferences: this.loggedInUser.userPreferences
    }
    console.log(updatedUser)
    this.userService.updateUser(updatedUser).subscribe((user)=>(updatedUser = user));
  }
}