import { Injectable } from '@angular/core';
import { Http, Response }  from '@angular/http';
import { People } from './people';
import { Observable }  from 'rxjs/Observable';
import 'rxjs/add/operator/map';

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

    

}