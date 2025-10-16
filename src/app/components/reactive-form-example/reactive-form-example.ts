import { Component } from '@angular/core';
import { PersonTable } from '../person-table/person-table';
import { SimpleDatatable } from '../simple-datatable/simple-datatable';
import { EpersonReactiveForm } from '../eperson-reactive-form/eperson-reactive-form';
import { EPerson } from 'src/app/shared/interfaces/eperson';

@Component({
  selector: 'app-reactive-form-example',
  imports: [PersonTable, SimpleDatatable, EpersonReactiveForm],
  templateUrl: './reactive-form-example.html',
  styleUrl: './reactive-form-example.css'
})
export class ReactiveFormExample {
  currentPerson: EPerson | undefined
  persons: EPerson[] = []

  onPerson(data: EPerson) {
    console.log("Father: ", data)
    this.currentPerson = data
    this.persons.push(data)
  }
}
