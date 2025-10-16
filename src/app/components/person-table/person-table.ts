import { Component, Input } from '@angular/core';
import { EPerson } from 'src/app/shared/interfaces/eperson';
import { Person } from 'src/app/shared/interfaces/person';

@Component({
  selector: 'app-person-table',
  imports: [],
  templateUrl: './person-table.html',
  styleUrl: './person-table.css'
})
export class PersonTable {
  @Input() personInput: Person | EPerson | undefined

  addressOrEducation: string = ""

  isPerson() : boolean {
    if(this.personInput && "address" in this.personInput) {
      this.addressOrEducation = this.personInput.address
      return 'address' in this.personInput
    }
    return false
  }

  isEPerson() : boolean {
    if(this.personInput && "education" in this.personInput) {
      this.addressOrEducation = this.personInput.education
      return "education" in this.personInput
    }
    return false
  }

  // name = "Thanasis"

  // person = {
  //   givenName: "Thanasis",
  //   surName: "Androutsos",
  //   age: 20,
  //   email: "Thanasis@aueb.gr"
  // }
  
}
