import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { user } from 'src/app/models/user';
import { UserserviceService } from 'src/app/services/userservice.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registrationForm!: FormGroup;
  user!: user;
  userSubmitted!: boolean;
  public userPreferences: Array<UserPreferences> = [
    {type: 'EDUCATION', value: 'Education' },
    {type: 'RECEATIOANL', value: 'Recreational'},
    {type: 'SOCIAL', value: 'Social'},
    {type: 'DIY', value: 'DIY'},
    {type: 'CHARITY', value: 'Charity'},
    {type: 'COOKING', value: 'Cookding'},
    {type: 'RELAXATION', value: 'Relaxation'},
    {type: 'MUSIC', value: 'Music'},
    {type: 'BUSYWORK', value: 'Busywork'}
  ];

  constructor(private fb: FormBuilder, private userService: UserserviceService) { }

  ngOnInit(): void {
    this.createRegistrationForm();
  }

  createRegistrationForm(){
    this.registrationForm = this.fb.group({
      userFirstName: [null, Validators.required],
      userLastName: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      username: [null, Validators.required],
      password: [null, [Validators.required, Validators.minLength(6), Validators.maxLength(10)]],
      confirmPassword: [null, [Validators.required, Validators.maxLength(10)]],
      // types: [new FormArray([]), Validators.required]
    }, {validators: this.passwordMatchingValidator});
  }

  // onCheckboxChange(e:any) {
  //   const prefArray: FormArray = this.registrationForm.get('types') as FormArray;
  //   /* Selected */
  //   if (e.target.checked) {
  //     // Add a new control in the arrayForm
  //     prefArray.push(new FormControl(e.target.value));
  //     /* unselected */
  //   } else {
  //     // find the unselected element
  //     let i: number = 0;
  //     prefArray.controls.forEach((item: AbstractControl) => {
  //       if(item.value == e.target.value){
  //         // Remove the unselected element from the arrayForm
  //         prefArray.removeAt(i);
  //         return;
  //       }
  //       i++;
  //     });
  //   }
  // }

  passwordMatchingValidator(fc: AbstractControl): ValidationErrors | null{
    return fc.get('password')?.value === fc.get('confirmPassword')?.value ? null :
    {notmatched: true};
  }

  onSubmit() {
    console.log(this.registrationForm.value);
    this.userSubmitted = true;

    if(this.registrationForm.valid){
      // this.user = Object.assign(this.user, this.registrationForm.value);
      this.userService.addUser(this.userData());
      this.registrationForm.reset();
      this.userSubmitted = false;
    }
  }


  userData(): user {
    return this.user = {
      firstname: this.userFirstName.value,
      lastname: this.userLastName.value,
      username: this.username.value,
      email: this.email.value,
      password: this.password.value,
      userPreferences: this.userPreferences.values
    }
  }

// Getter methods for all form controls

  get userFirstName(){
    return this.registrationForm.get('userFirstName') as FormControl;
  }
  get userLastName(){
    return this.registrationForm.get('userLastName') as FormControl;
  }
  get email(){
    return this.registrationForm.get('email') as FormControl;
  }
  get username() {
    return this.registrationForm.get('username') as FormControl;
  }
  get password(){
    return this.registrationForm.get('password') as FormControl;
  }
  get confirmPassword(){
    return this.registrationForm.get('confirmPassword') as FormControl;
  }

  get prefTypes() {
    return this.registrationForm.get('types') as FormControl;
  }

}
