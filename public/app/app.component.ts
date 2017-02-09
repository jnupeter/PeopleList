import { Component } from '@angular/core';
import { PeopleComponent } from './people.component';

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
          </tbody>
       </table>
  `
})
export class AppComponent  { 
   
}
