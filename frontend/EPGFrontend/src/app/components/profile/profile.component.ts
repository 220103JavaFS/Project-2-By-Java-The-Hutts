import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserserviceService } from 'src/app/services/userservice.service';
import { UserPreferences } from 'src/app/user-preferences';
import { users } from 'src/app/users';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  types: any[]=[];
  user: any = {};
  profileForm!: FormGroup;

  preferences = Object.keys(UserPreferences);

  constructor(private formBuilder: FormBuilder){
  }

  ngOnInit(): void {
    this.profileForm = this.formBuilder.group({
      newUserFName: [null, Validators.required],
      newUserLName: [null, Validators.required],
      newUsername: [null],
      newPassword: [null],
      newEmail: [null, [Validators.required, Validators.email]],
      types: new FormArray([])
    })

  }

  onCheckboxChange(e:any) {
    const prefArray: FormArray = this.profileForm.get('types') as FormArray;

    if (e.target.checked) {

      prefArray.push(new FormControl(e.target.value));

    } else {
      let i: number = 0;
      prefArray.controls.forEach((item: AbstractControl) => {
        if(item.value == e.target.value){
          prefArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }

  onSubmit() {
    console.log(this.profileForm.value);
    this.user = Object.assign(this.user, this.profileForm.value);
    this.addUser(this.user);
  }

  addUser(user: any){
    let users = [];
    if (localStorage.getItem('Users')){
      users= JSON.parse(localStorage.getItem('Users') || '{}');
      users=[user, ...users];
    } else {
      users=[user];
    }
    localStorage.setItem('Users',JSON.stringify(this.user));
  }

  testuser = JSON.parse(localStorage.getItem('Users')||'{}');
}
  // getUserProfileById(id:number){
  //   this.us.getUserByID(id).subscribe(
  //     (response: users[]) => {
  //       this.newUser = response;
  //     }
  //   )
  // }

  // sendUsers(){
  //   let u = new users(0, this.newUserFName, this.newUserLName, this.newUsername, this.newEmail, this.newPassword, [])
  //   this.us.createUser(u).subscribe(
  //     (response: users[]) => {
  //       this.newUser = response;
  //     }
  //   )
  // }











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