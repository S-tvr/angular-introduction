import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Credentials } from 'src/app/shared/interfaces/user';
import { UserService } from 'src/app/shared/services/user';

@Component({
  selector: 'app-user-login',
  imports: [ReactiveFormsModule],
  templateUrl: './user-login.html',
  styleUrl: './user-login.css'
})
export class UserLogin {
  userService = inject(UserService)

  form = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })

  onSubmit() {
    // console.log(this.form.value)
    const credentials = this.form.value as Credentials

    this.userService.loginUser(credentials)
    .subscribe({
      next: (response) => {
        console.log("Logged in", response)
        const access_token = response.data
        localStorage.setItem('access_token', access_token)
      },

      error: (error) => {
        console.log("Not logged in", error)
      }
    })
  }
}
