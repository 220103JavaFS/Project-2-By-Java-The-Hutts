import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { user } from 'src/app/models/user';
import { UserserviceService } from 'src/app/services/userservice.service';
import { UserPreferences } from 'src/app/user-preferences';
// import { users } from 'src/app/users';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  types: any[]=[];
  user: any = {};
  profileForm!: FormGroup;
  userSubmitted!: boolean;
  education:string='';
  recreational:string='';
  social:string='';
  diy:string='';
  charity:string='';
  cooking:string='';
  relaxation:string='';
  music:string='';
  busywork:string='';

  constructor(private formBuilder: FormBuilder, private userService: UserserviceService){
  }

  ngOnInit(): void {
    this.profileForm = this.formBuilder.group({
      newUserFName: [null, Validators.required],
      newUserLName: [null, Validators.required],
      newUsername: [null],
      newPassword: [null],
      newEmail: [null, [Validators.required, Validators.email]],
      userPreferences: []
    })

  }

  onCheckboxChange(e:any) {
    const prefArray: FormArray = this.profileForm.get('userPreferences') as FormArray;
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
    Object.keys(this.profileForm.controls).forEach(key => {
      this.profileForm.controls[key].markAsDirty();
    });
    this.userService.addUser(this.user);

  }

  userData(): user {
    return this.user = {
      firstname: this.newUserFName.value,
      lastname: this.newUserLName.value,
      username: this.newUsername.value,
      email: this.newEmail.value,
      password: this.newPassword.value,
      userPreferences: [
        this.education,
        this.recreational,
        this.social,
        this.diy,
        this.charity,
        this.cooking,
        this.relaxation,
        this.music,
        this.busywork
      ]
    }
  }

  // Getter methods for all form controls

  get newUserFName(){
    return this.profileForm.get('newUserFName') as FormControl;
  }
  get newUserLName(){
    return this.profileForm.get('newUserLName') as FormControl;
  }
  get newEmail(){
    return this.profileForm.get('newEmail') as FormControl;
  }
  get newUsername() {
    return this.profileForm.get('newUsername') as FormControl;
  }
  get newPassword(){
    return this.profileForm.get('newPassword') as FormControl;
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