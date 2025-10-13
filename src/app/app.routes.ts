import { Routes } from '@angular/router';
import { Welcome } from './components/welcome/welcome';
import { ForDirectiveExample } from './components/for-directive-example/for-directive-example';
import { EventBindExample } from './components/event-bind-example/event-bind-example';
import { ComponentInputExample } from './components/component-input-example/component-input-example';
import { SimpleDatatableExample } from './components/simple-datatable-example/simple-datatable-example';
import { ComponentOutputExample } from './components/component-output-example/component-output-example';
import { TemplateDrivenFormExample } from './components/template-driven-form-example/template-driven-form-example';

export const routes: Routes = [
    {path:'welcome', component: Welcome},
    {path: 'for-directive-example', component: ForDirectiveExample},
    {path: 'component-input-example', component: ComponentInputExample},
    {path: 'component-output-example', component: ComponentOutputExample},
    {path: 'event-bind-example', component: EventBindExample},
    {path: 'simple-data-table-example', component: SimpleDatatableExample},
    {path: 'template-driven-form-example', component: TemplateDrivenFormExample},
    {path: '', redirectTo:'/welcome', pathMatch:'full'}
];
