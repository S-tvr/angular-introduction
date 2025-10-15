import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { EPerson } from 'src/app/shared/interfaces/eperson';

@Component({
  selector: 'app-eperson-template-driven-form',
  imports: [
    FormsModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    CommonModule
  ],
  templateUrl: './eperson-template-driven-form.html',
  styleUrl: './eperson-template-driven-form.css'
})
export class EpersonTemplateDrivenForm {
  onSubmit(value: EPerson) {
    console.log(value)
  }
}
