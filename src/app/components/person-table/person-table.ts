import { Component, Input } from '@angular/core';
import { Person } from 'src/app/shared/interfaces/person';

@Component({
  selector: 'app-person-table',
  imports: [],
  templateUrl: './person-table.html',
  styleUrl: './person-table.css'
})
export class PersonTable {
  @Input() personInput: Person | undefined
  // name = "Thanasis"

  // person = {
  //   givenName: "Thanasis",
  //   surName: "Androutsos",
  //   age: 20,
  //   email: "Thanasis@aueb.gr"
  // }
}
