import { Component } from '@angular/core';
import { Person } from 'src/app/shared/interfaces/person';
import { PersonTable } from '../person-table/person-table';

@Component({
  selector: 'app-component-input-example',
  imports: [PersonTable],
  templateUrl: './component-input-example.html',
  styleUrl: './component-input-example.css'
})
export class ComponentInputExample {
  person0: Person = {
    givenName: "Christodoulos",
    surName: "Fragoudakis",
    age: 23,
    email: "chris@aueb.gr",
    address: "Athens, Greece"
  }

  person1: Person = {
    givenName: 'John',
    surName: 'Doe',
    age: 45,
    email: 'John@aueb.gr',
    address: 'New York, USA'
  }
}
