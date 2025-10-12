import { Component, Input } from '@angular/core';
import { EPerson } from 'src/app/shared/interfaces/eperson';    // so that I can use interface for check

@Component({
  selector: 'app-simple-datatable',
  imports: [],
  templateUrl: './simple-datatable.html',
  styleUrl: './simple-datatable.css'
})
export class SimpleDatatable {
  @Input() data: EPerson[] | undefined
}
