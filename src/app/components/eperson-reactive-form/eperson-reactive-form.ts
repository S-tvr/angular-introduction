import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-eperson-reactive-form',
  imports: [
    ReactiveFormsModule, 
    MatSelectModule, 
    MatInputModule, 
    MatFormFieldModule, 
    MatButtonModule ],
  templateUrl: './eperson-reactive-form.html',
  styleUrl: './eperson-reactive-form.css'
})
export class EpersonReactiveForm {
  form = new FormGroup({
    givenName: new FormControl("", Validators.required),
    surName: new FormControl("", Validators.required),
    age: new FormControl("18",[
      Validators.required,
      Validators.pattern('^[0-9]*$'),
      Validators.min(18),
      Validators.max(100)
    ]),
    email: new FormControl("", [
      Validators.required,
      Validators.email
    ]),
    education: new FormControl("", Validators.required)
  })

}
