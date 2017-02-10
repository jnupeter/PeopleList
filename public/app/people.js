"use strict";
var People = (function () {
    function People(id, name, org, richest) {
        this.skills = [];
        this.interests = [];
        this.id = id;
        this.name = name;
        this.org = org;
        this.richest = richest;
        this.skills = [];
        this.interests = [];
    }
    People.prototype.getSkills = function () {
        return this.skills;
    };
    People.prototype.getInterests = function () {
        return this.interests;
    };
    return People;
}());
exports.People = People;
//# sourceMappingURL=people.js.map