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
    {text: "Component Output Example", linkName: "component-output-example"},
    {text: "@for Directive Example", linkName: "for-directive-example"},
    {text: "Event Bind Example", linkName: "event-bind-example"},
    {text: "Simple Data Table Example", linkName: "simple-data-table-example"},
    {text: "Template Driven Form Example", linkName: "template-driven-form-example"},
    {text: "Reactive Form Example", linkName: "reactive-form-example"},
    {text: "Http Client Example", linkName: "http-client-example"}
  ]
}
