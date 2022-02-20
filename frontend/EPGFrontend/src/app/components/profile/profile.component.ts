import { Component, OnInit } from '@angular/core';
import { user } from 'src/app/models/user';
import { preference } from 'src/app/models/preference';
import { UserserviceService } from 'src/app/services/userservice.service';




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

    firstname!:string;
    lastname!:string;
    email!:string;
    username!:string;
    password!:string;
    preferenceList!:preference[];

  constructor(private userService: UserserviceService){
  }

  ngOnInit(): void {
    this.getPreference();
  }

  onChange(){
    console.log(this.preferenceList)
  }
}