import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PersonTable } from './components/person-table/person-table';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PersonTable],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // protected readonly title = signal('angular-introduction');

  name = "Markos"

  person = {
    givenName : "Markos",
    surname: "Karapatsis",
    age: 52,
    email: "marka@aueb.gr"
  }

}
