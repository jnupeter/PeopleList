import { Injectable } from '@angular/core';
import { Http, Response }  from '@angular/http';
import { People } from './people';
import { Observable }  from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Skill } from './skill';
import { Interest } from './interest';

@Injectable()
export class PeopleService {
    ps : People[];

    constructor(public http: Http) {
    }

    getPersons() : Observable<People[]> {
       return this.http.request("/people").map(res => {
           this.ps = <People[]>res.json();
           return this.ps;
       });
    }

    getRichestPerson() : Observable<any> {
        return this.http.request("/richest").map(res => {
            return <any>res.json();
        });
    }

    getSkillsFor(persons: People[]) : Observable<Skill[]> {
         var q = persons.map(p => {
             return p.id.toString();
         }).join(',');

         var url = "/skills?personIds=" + q;
         return this.http.request(url).map(res => {
            return <Skill[]>res.json();
         });
    }

    getInterestsFor(persons: People[]) : Observable<Interest[]> {
         var q = persons.map(p => {
             return p.id.toString();
         }).join(',');

         var url = "/interests?personIds=" + q;
         return this.http.request(url).map(res => {
             return <Interest[]>res.json();
         });
    }

}