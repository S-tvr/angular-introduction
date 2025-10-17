import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { EPerson } from 'src/app/shared/interfaces/eperson';    // so that I can use interface for check
import { sortBy } from 'lodash-es'

@Component({
  selector: 'app-simple-datatable',
  imports: [],
  templateUrl: './simple-datatable.html',
  styleUrl: './simple-datatable.css'
})
export class SimpleDatatable {
  @Input() data: EPerson[] | undefined
  @Input() myData: boolean = true;
  @Output() personClicked = new EventEmitter<EPerson>()

    epersonsData: EPerson[] = [];

  ngOnChanges(changes: SimpleChanges){
    if (changes['data'] && this.data) {
      console.log("ngOnChanges", this.data);
      this.epersonsData = this.data
    }
    if (changes['myData']) {
      console.log("MyData")
      // this.myFunction();
    }
  }

  sortOrder = {
    givenName: "none",
    surName: "none",
    age: "none",
    email: "none",
    education: "none"
  }

  sortData(sortKey: keyof EPerson) : void {
    console.log(sortKey)
    if (this.sortOrder[sortKey] === "asc") {
      this.sortOrder[sortKey] = "desc"
      this.epersonsData = sortBy(this.epersonsData, sortKey).reverse()
    } else {
      this.sortOrder[sortKey] = "asc"
      this.epersonsData = sortBy(this.epersonsData, sortKey)
    }

    for (let key in this.sortOrder) {
      if(key !== sortKey) {
        this.sortOrder[key as keyof EPerson] = "none"
      }
    }
    console.log(this.sortOrder)
  }

  sortSign(sortKey: keyof EPerson) : string {
    if (this.sortOrder[sortKey] === "asc") return '\u2191'
    else if (this.sortOrder[sortKey] === "desc") return '\u2193'
    else return '';
  }

  onPersonClicked(person: EPerson) {
    console.log("Person clicked: ", person)
    this.personClicked.emit(person)
  }
}
