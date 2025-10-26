import { Component, inject } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from 'src/app/shared/services/user';
import { User } from 'src/app/shared/interfaces/user';

@Component({
  selector: 'app-user-registration-for-backend',
  imports: [MatInputModule, MatFormFieldModule, MatButtonModule, ReactiveFormsModule],
  templateUrl: './user-registration-for-backend.html',
  styleUrl: './user-registration-for-backend.css'
})
export class UserRegistrationForBackend {
  userService = inject(UserService)

  form = new FormGroup({
    username: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    surname: new FormControl('', Validators.required),
    email: new FormControl('',[Validators.required, Validators.email]),
    address: new FormGroup({
      area: new FormControl(''),
      road: new FormControl('')
    }),
    password: new FormControl('', [Validators.required, Validators.minLength(5)]),
    confirmPassword: new FormControl('', [Validators.required, Validators.minLength(5)])
  },
    this.passwordConfirmValidator,
  )

  passwordConfirmValidator(control: AbstractControl): {[key:string]: boolean} | null {
    const form = control as FormGroup
    const password = form.get('password')?.value
    const confirmPassword = form.get('confirmPassword')?.value

    if(password && confirmPassword && password!== confirmPassword){
      form.get('confirmPassword')?.setErrors({passwordMissmatch: true})
      return{passwordMissmatch: true}
    }

    return null
  }

 onSubmit(){
    // const data = this.form.value as User;
    const data: User = {
      'username': this.form.get('username')?.value || '',
      'password': this.form.get('password')?.value || '',
      'name': this.form.get('name')?.value || '',
      'surname': this.form.get('surname')?.value || '',
      'email':this.form.get('email')?.value || '',
      'address': {
        'area':this.form.controls.address.controls.area?.value || '',
        'road': this.form.controls.address.controls.road?.value || ''
      }
    }
    console.log(data)
    this.userService.registerUser(data)
    .subscribe({
      next: (response) => {
        console.log("user saved", response)
      },
      error: (response) => {
        console.log("user not saved", response)
      }
    })

  }

  check_duplicate_email() {
    const email = this.form.get("email")?.value

    if (email) {
      this.userService.check_duplicate_email(email)
      .subscribe({
        next: (response) => {
          console.log(response)
          this.form.get("email")?.setErrors(null)
        },
        error: (response) => {
          console.log(response)
          const message = response.data
          console.log(message)
          this.form.get("email")?.setErrors({duplicateEmail: true})
        }
      })
    }
  }
}