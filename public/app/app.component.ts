import { Component, OnInit } from '@angular/core';
import { PeopleComponent } from './people.component';
import { People } from './people';
import { Skill } from './skill';
import { Interest } from './interest';
import { PeopleService } from './people.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/operator/map';

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
   private skills: Skill[] = [];
   private interests: Interest[] = [];

   constructor(public peopleService: PeopleService){
   }

   ngOnInit() {
      this.peopleService.getPersons().map(
         persons => {
           //get persons
           this.persons = persons;
           
           //get skills
           this.peopleService.getSkillsFor(persons).subscribe(
               res => {
                  this.skills = res;
                  this._populateSkills(res);
                }
           );

           //get interests
           this.peopleService.getInterestsFor(persons).subscribe(
               res => {
                 this.interests = res;
                 this._populateInterests(res);
                }
           );

           //get richestpersons
           this.peopleService.getRichestPerson().subscribe(
             res => {
               var richestPerson = res.richestPerson;
               this.persons.forEach(p =>{
                   if (p.id == richestPerson) {
                     p.richest = true;
                   }
               });
             }
           );
          }
      ).subscribe(
        res => console.log('finished')
      );     
    }

    private _populateSkills(skills: Skill[]) {
       this.persons.forEach(p => {
         p.skills = skills.filter(s => s.personId == p.id.toString() );
       });
    }

    private _populateInterests(interests: Interest[]) {
        this.persons.forEach(p => {
          p.interests = interests.filter(i => i.personId == p.id.toString() );
        });
    }
}
