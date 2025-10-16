import { Component } from '@angular/core';
import { PersonTable } from '../person-table/person-table';
import { SimpleDatatable } from '../simple-datatable/simple-datatable';
import { EpersonReactiveForm } from '../eperson-reactive-form/eperson-reactive-form';

@Component({
  selector: 'app-reactive-form-example',
  imports: [PersonTable, SimpleDatatable, EpersonReactiveForm],
  templateUrl: './reactive-form-example.html',
  styleUrl: './reactive-form-example.css'
})
export class ReactiveFormExample {

}
