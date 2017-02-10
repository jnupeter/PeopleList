import { Component, OnInit } from '@angular/core';
import { PeopleComponent } from './people.component';
import { People } from './people';
import { PeopleService } from './people.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';

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
export class AppComponent implements OnInit { 
   
   private persons: People[] = [];
   private richPerson: number;

   constructor(public peopleService: PeopleService){
   }

   ngOnInit() {

      //get all persons
      Observable.forkJoin(
        this.peopleService.getPersons(),
        this.peopleService.getRichestPerson()
      ).subscribe(
        res => {
            this.persons = res[0];
            
            this.richPerson = res[1].richestPerson;
            this.persons.forEach(p => {
                if (p.id == this.richPerson) {
                  p.richest = true;
                }
            });
        }
      );
   
    //get all skills and interest
    Observable.forkJoin(
      this.peopleService.getSkillsFor(this.persons),
      this.peopleService.getInterestsFor(this.persons)
    ) .subscribe(
       res => {
         
       }
    );
}
}
