import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PersonTable } from './components/person-table/person-table';
import { Person } from './shared/interfaces/person';
import { EventBindExample } from './components/event-bind-example/event-bind-example';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PersonTable, EventBindExample],
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

  // Send array to person-table. (dummy data: mockaroo)
  users: Person[] = [
    {
  "givenName": "Devon",
  "surName": "Jermin",
  "email": "djermin0@last.fm",
  "age": 1,
  "address": "13th Floor"
}, {
  "givenName": "Euell",
  "surName": "Cloonan",
  "email": "ecloonan1@ucsd.edu",
  "age": 2,
  "address": "Room 410"
}, {
  "givenName": "Maximilian",
  "surName": "Doxsey",
  "email": "mdoxsey2@chron.com",
  "age": 3,
  "address": "PO Box 97657"
}, {
  "givenName": "Carissa",
  "surName": "McCardle",
  "email": "cmccardle3@tmall.com",
  "age": 4,
  "address": "Suite 99"
}, {
  "givenName": "Alistair",
  "surName": "Mears",
  "email": "amears4@salon.com",
  "age": 5,
  "address": "Room 912"
}, {
  "givenName": "Cyndie",
  "surName": "Tett",
  "email": "ctett5@jiathis.com",
  "age": 6,
  "address": "PO Box 76506"
}, {
  "givenName": "Gaile",
  "surName": "Simic",
  "email": "gsimic6@purevolume.com",
  "age": 7,
  "address": "Apt 1781"
}, {
  "givenName": "Cort",
  "surName": "Hilldrop",
  "email": "chilldrop7@163.com",
  "age": 8,
  "address": "Suite 75"
}, {
  "givenName": "Talbot",
  "surName": "Burwin",
  "email": "tburwin8@cloudflare.com",
  "age": 9,
  "address": "PO Box 75096"
}, {
  "givenName": "Marin",
  "surName": "Gosford",
  "email": "mgosford9@myspace.com",
  "age": 10,
  "address": "Suite 61"
}, {
  "givenName": "Romonda",
  "surName": "Wear",
  "email": "rweara@fc2.com",
  "age": 11,
  "address": "Room 714"
}, {
  "givenName": "Orton",
  "surName": "MacTrustey",
  "email": "omactrusteyb@guardian.co.uk",
  "age": 12,
  "address": "PO Box 81905"
}, {
  "givenName": "Katina",
  "surName": "Huggens",
  "email": "khuggensc@shop-pro.jp",
  "age": 13,
  "address": "Apt 1433"
}, {
  "givenName": "Berni",
  "surName": "Chimienti",
  "email": "bchimientid@webnode.com",
  "age": 14,
  "address": "Suite 69"
}, {
  "givenName": "Moss",
  "surName": "Visick",
  "email": "mvisicke@creativecommons.org",
  "age": 15,
  "address": "Apt 1872"
}, {
  "givenName": "Van",
  "surName": "Furber",
  "email": "vfurberf@uol.com.br",
  "age": 16,
  "address": "Apt 361"
}, {
  "givenName": "Callean",
  "surName": "Marcome",
  "email": "cmarcomeg@phoca.cz",
  "age": 17,
  "address": "PO Box 37861"
}, {
  "givenName": "Papagena",
  "surName": "Buddles",
  "email": "pbuddlesh@is.gd",
  "age": 18,
  "address": "Apt 830"
}, {
  "givenName": "Camala",
  "surName": "Cantor",
  "email": "ccantori@ftc.gov",
  "age": 19,
  "address": "PO Box 30712"
}, {
  "givenName": "Gabby",
  "surName": "Everest",
  "email": "geverestj@latimes.com",
  "age": 20,
  "address": "Room 850"
}
]

}
