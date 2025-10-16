import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { PersonTable } from './components/person-table/person-table';
import { Person } from './shared/interfaces/person';
import { EventBindExample } from './components/event-bind-example/event-bind-example';
import { ListGroupMenu } from './components/list-group-menu/list-group-menu';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, ListGroupMenu],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
}
