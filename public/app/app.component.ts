import { Component } from '@angular/core';
import { PeopleComponent } from './people.component';
import { People } from './people';
import { PeopleService } from './people.service';

@Component({
  selector: 'people-list',
  template: `<h1>People List</h1>
       <table class="table table-striped">
          <thead>
             <tr>
                <th>Name</th>
                <th>Company</th>
                <th>Skills</th>
                <th>Interests</th>
             </tr>
          </thead>
          <tbody>
             <tr *ngFor="let p of persons" people [ngClass]="{richest : p.richest}" [person]="p"></tr>
          </tbody>
       </table>
  `
})
export class AppComponent  { 
   
   private persons: People[] = [];

   constructor(peopleService: PeopleService){
      peopleService.getPersons().subscribe(res => this.persons = res);
   }
}
