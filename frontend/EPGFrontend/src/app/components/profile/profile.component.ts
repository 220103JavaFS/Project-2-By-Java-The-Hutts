import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserserviceService } from 'src/app/services/userservice.service';
import { UserPreferences } from 'src/app/user-preferences';
import { user } from 'src/app/models/user';


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
      //newPassword: [null],
      newEmail: [null, [Validators.required, Validators.email]],
      types: new FormArray([])
    })

  }

  onCheckboxChange(e:any) {
    const prefArray: FormArray = this.profileForm.get('types') as FormArray;
    /* Selected */
    if (e.target.checked) {
      // Add a new control in the arrayForm
      prefArray.push(new FormControl(e.target.value));
      /* unselected */
    } else {
      // find the unselected element
      let i: number = 0;
      prefArray.controls.forEach((item: AbstractControl) => {
        if(item.value == e.target.value){
          // Remove the unselected element from the arrayForm
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



  //   this.getUserProfileById(this.UserId);
  // }

  // getUserProfileById(id:number){
  //   this.us.getUserByID(id).subscribe(
  //     (response: users[]) => {
  //       this.newUser = response;
  //     }
  //   )


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