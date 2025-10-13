import { Component } from '@angular/core';
import { EpersonTemplateDrivenForm } from '../eperson-template-driven-form/eperson-template-driven-form';
import { PersonTable } from '../person-table/person-table';
import { SimpleDatatable } from '../simple-datatable/simple-datatable';

@Component({
  selector: 'app-template-driven-form-example',
  imports: [EpersonTemplateDrivenForm, PersonTable, SimpleDatatable],
  templateUrl: './template-driven-form-example.html',
  styleUrl: './template-driven-form-example.css'
})
export class TemplateDrivenFormExample {

}
