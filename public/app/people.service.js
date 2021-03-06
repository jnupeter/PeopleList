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
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
var PeopleService = (function () {
    function PeopleService(http) {
        this.http = http;
    }
    PeopleService.prototype.getPersons = function () {
        var _this = this;
        return this.http.request("/people").map(function (res) {
            _this.ps = res.json();
            return _this.ps;
        });
    };
    PeopleService.prototype.getRichestPerson = function () {
        return this.http.request("/richest").map(function (res) {
            return res.json();
        });
    };
    PeopleService.prototype.getSkillsFor = function (persons) {
        var q = persons.map(function (p) {
            return p.id.toString();
        }).join(',');
        var url = "/skills?personIds=" + q;
        return this.http.request(url).map(function (res) {
            return res.json();
        });
    };
    PeopleService.prototype.getInterestsFor = function (persons) {
        var q = persons.map(function (p) {
            return p.id.toString();
        }).join(',');
        var url = "/interests?personIds=" + q;
        return this.http.request(url).map(function (res) {
            return res.json();
        });
    };
    PeopleService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], PeopleService);
    return PeopleService;
}());
exports.PeopleService = PeopleService;
//# sourceMappingURL=people.service.js.map