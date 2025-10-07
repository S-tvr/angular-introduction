import { Component } from '@angular/core';

@Component({
  selector: 'app-person-table',
  imports: [],
  templateUrl: './person-table.html',
  styleUrl: './person-table.css'
})
export class PersonTable {
  name = "Thanasis"

  person = {
    givenName: "Thanasis",
    surname: "Androutsos",
    age: 20,
    email: "Thanasis@aueb.gr"
  }
}
