import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive  } from "@angular/router";

@Component({
  selector: 'app-list-group-menu',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './list-group-menu.html',
  styleUrl: './list-group-menu.css'
})
export class ListGroupMenu {
  menu = [
    {text: "Component Input Example", linkName: "component-input-example"},
    {text: "@for Directive Example", linkName: "for-directive-example"},
    {text: "Event Bind Example", linkName: "event-bind-example"}
  ]
}
