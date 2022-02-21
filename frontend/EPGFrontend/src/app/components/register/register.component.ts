import { Component, OnInit } from '@angular/core';
import { user } from 'src/app/models/user';
import { preference } from 'src/app/models/preference';
import { UserserviceService } from 'src/app/services/userservice.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 
  
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
arr!:[string];


constructor(private service:UserserviceService, private  router: Router) { }

ngOnInit(): void {
  this.getPreference();
}

onChange(){
  console.log(this.preferenceList)
  }

onSubmit(){

let newUser:user={
  firstname: this.firstname,
  lastname: this.lastname,
  email: this.email,
  password: this.password,
  username:this.username,
  userPreferences:this.arr,
}

for(let i=0; i<this.preferenceList.length;i++){
  if(this.preferenceList[i].selected === true){
    newUser.userPreferences.push(this.preferenceList[i].name);
  }
}

console.log(newUser)
this.service.createUser(newUser).subscribe((user)=>(newUser = user));
this.router.navigate(['/login']);
}
 
}