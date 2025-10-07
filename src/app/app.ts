import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
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
