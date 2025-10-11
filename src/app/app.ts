import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PersonTable } from './components/person-table/person-table';
import { Person } from './shared/interfaces/person';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PersonTable],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // protected readonly title = signal('angular-introduction');

  // step 1: One way binding of data
  name = "Markos"

  person = {
    givenName : "Markos",
    surName: "Karapatsis",
    age: 52,
    email: "marka@aueb.gr"
  }

  //step 2: render data from a seperate component, by adding it in the app template (i.e. html)

  //step 3: Componnent input (from parent). Pass data to a componnent from parent as in input. (using parent template again)
  person0: Person = {
    givenName: "Christodoulos",
    surName: "Fragoudakis",
    age: 55,
    email: "chfrag@aueab.gr",
    address: "Athens, Greece"
  }

  person1: Person = {
    givenName: "John",
    surName: "Doe",
    age: 32,
    email: "John@example.com",
    address: 'New York, USA'
  }
}
