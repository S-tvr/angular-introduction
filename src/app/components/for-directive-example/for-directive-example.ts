import { Component } from '@angular/core';
import { Person } from 'src/app/shared/interfaces/person';
import { PersonTable } from '../person-table/person-table';

@Component({
  selector: 'app-for-directive-example',
  imports: [PersonTable],
  templateUrl: './for-directive-example.html',
  styleUrl: './for-directive-example.css'
})
export class ForDirectiveExample {
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
