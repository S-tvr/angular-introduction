import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { EPerson } from 'src/app/shared/interfaces/eperson';

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
  @Output() person = new EventEmitter<EPerson>()

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

  // form = new FormGroup<{
  //   givenName: FormControl<string>,
  //   surName:FormControl<string>,
  //   email:FormControl<string>,
  //   age:FormControl<number>,
  //   education:FormControl<string>
  // }>({
  //   givenName: new FormControl('',{nonNullable:true, validators: Validators.required}),
  //   surName: new FormControl('',{nonNullable:true, validators: Validators.required}),
  //   age: new FormControl(18, { 
  //     nonNullable:true, 
  //     validators:[
  //       Validators.required, 
  //       Validators.min(18),
  //       Validators.max(100)
  //     ]}),
  //    email: new FormControl('', {nonNullable:true, validators:[Validators.required, Validators.email]}),
  //    education: new FormControl('', {nonNullable: true, validators: Validators.required})
  // })

  onSubmit() {
    if(this.form.valid) {
      console.log("onSubmit() ", this.form.value)
      const person: EPerson = {
        givenName: this.form.value.givenName ?? "",
        surName: this.form.value.surName ?? "",
        age: this.form.value.age ?? "",
        email: this.form.value.email ?? "",
        education: this.form.value.education ?? ""
      }

        this.person.emit(person)
        this.form.reset()
    }
    // console.log("Data: ", data)
    // console.log("givenName: ", this.form.controls.givenName.value)
    // OR console.log("givenName: ", this.form.controls['givenName'].value)


  }

  onSetValue() {
    this.form.setValue({
      givenName: "kostas",
      surName: "lallakis",
      age: "27",
      email: "ddd@gamil.com",
      education: "Associate's Degree"
    })
  }
}
