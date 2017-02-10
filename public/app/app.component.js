"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var people_service_1 = require('./people.service');
require('rxjs/add/observable/forkJoin');
require('rxjs/add/operator/map');
var AppComponent = (function () {
    function AppComponent(peopleService) {
        this.peopleService = peopleService;
        this.persons = [];
        this.skills = [];
        this.interests = [];
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.peopleService.getPersons().map(function (persons) {
            //get persons
            _this.persons = persons;
            //get skills
            _this.peopleService.getSkillsFor(persons).subscribe(function (res) {
                _this.skills = res;
                _this._populateSkills(res);
            });
            //get interests
            _this.peopleService.getInterestsFor(persons).subscribe(function (res) {
                _this.interests = res;
                _this._populateInterests(res);
            });
            //get richestpersons
            _this.peopleService.getRichestPerson().subscribe(function (res) {
                var richestPerson = res.richestPerson;
                _this.persons.forEach(function (p) {
                    if (p.id == richestPerson) {
                        p.richest = true;
                    }
                });
            });
        }).subscribe(function (res) { return console.log('finished'); });
    };
    AppComponent.prototype._populateSkills = function (skills) {
        this.persons.forEach(function (p) {
            p.skills = skills.filter(function (s) { return s.personId == p.id.toString(); });
        });
    };
    AppComponent.prototype._populateInterests = function (interests) {
        this.persons.forEach(function (p) {
            p.interests = interests.filter(function (i) { return i.personId == p.id.toString(); });
        });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'people-list',
            template: "<h1>People List</h1>\n       <table class=\"table table-striped\">\n          <thead>\n             <tr>\n                <th>Name</th>\n                <th>Company</th>\n                <th>Skills</th>\n                <th>Interests</th>\n             </tr>\n          </thead>\n          <tbody>\n             <tr *ngFor=\"let p of persons\" people [ngClass]=\"{richest : p.richest}\" [person]=\"p\"></tr>\n          </tbody>\n       </table>\n  "
        }), 
        __metadata('design:paramtypes', [people_service_1.PeopleService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map