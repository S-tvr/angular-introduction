import { Component } from '@angular/core';
import { EPerson, ManyPerson } from 'src/app/shared/interfaces/eperson';
import { SimpleDatatable } from '../simple-datatable/simple-datatable';

@Component({
  selector: 'app-component-output-example',
  imports: [SimpleDatatable],
  templateUrl: './component-output-example.html',
  styleUrl: './component-output-example.css'
})
export class ComponentOutputExample {
  manyPerson = ManyPerson

  showPersonClicked(person: EPerson) {
    console.log("Component Output", person)
    alert(this.personTemplate(person))
  }

  personTemplate(person: EPerson) {
    return `
    Person Details:

    First Name: ${person.givenName}
    Last Name: ${person.surName}
    Age: ${person.age}
    Email: ${person.email}
    Education: ${person.education}
    `
  }
}
