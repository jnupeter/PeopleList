import { Component } from '@angular/core';
import { People } from './people';

@Component({
    selector: '[people]',
    template: `
           <td>{{person.name}}</td>
           <td>{{person.org}}</td>
           <td>bb</td>
           <td>bb</td>
    `,
    inputs: ['person']
})
export class PeopleComponent {
    person: People;

}