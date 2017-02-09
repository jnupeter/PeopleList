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
var AppComponent = (function () {
    function AppComponent(peopleService) {
        var _this = this;
        this.persons = [];
        peopleService.getPersons().subscribe(function (res) { return _this.persons = res; });
    }
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