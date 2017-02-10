import { Component } from '@angular/core';
import { People } from './people';

@Component({
    selector: '[people]',
    template: `
           <td>{{person.name}}</td>
           <td>{{person.org}}</td>
           <td><ul><li *ngFor="let s of person.skills">{{s.name}}</li></ul></td>
           <td><ul><li *ngFor="let i of person.interests">{{i.name}}</li></ul></td>
    `,
    inputs: ['person']
})
export class PeopleComponent {
    person: People;

}