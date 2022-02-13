import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registrationForm!: FormGroup;
  user: any = {};
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    //   this.registrationForm = new FormGroup({
    //   userFirstName: new FormControl(null, Validators.required),
    //   userLastName: new FormControl(null, Validators.required),
    //   email: new FormControl(null, [Validators.required, Validators.email]),
    //   username: new FormControl(null, Validators.required),
    //   password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
    //   confirmPassword: new FormControl(null, [Validators.required, Validators.maxLength(10)])
    // }, this.passwordMatchingValidator);
    this.createRegistrationForm();
  }

  createRegistrationForm(){
    this.registrationForm = this.fb.group({
      userFirstName: [null, Validators.required],
      userLastName: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      username: [null, Validators.required],
      password: [null, [Validators.required, Validators.minLength(6)]],
      confirmPassword: [null, [Validators.required, Validators.maxLength(10)]]
    }, {validators: this.passwordMatchingValidator});
  }

  passwordMatchingValidator(fc: AbstractControl): ValidationErrors | null{
    return fc.get('password')?.value === fc.get('confirmPassword')?.value ? null :
    {notmatched: true};
  }

  get userName() {
    return this.registrationForm.get('userName') as FormControl;
  }

  onSubmit() {
    console.log(this.registrationForm);
    this.user = Object.assign(this.user, this.registrationForm.value);
    localStorage.setItem('Users', this.user);
  }

}
