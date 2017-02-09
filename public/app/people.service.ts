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
           return <People[]>res.json();
       });
              //.map((res : Response) => {
                 //return (<any>res.json()).items.map(item => {
                 //    return new People(item.id, item.name, item.org, false);
                 //})
              //});
    }

}