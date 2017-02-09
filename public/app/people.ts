import { Skill } from './skill';
import { Interest } from './interest';

export class People {
    id: number;
    name: string;
    org: string;
    richest: boolean;
    skills: Skill[];
    interests: Interest[];

    constructor(id: number, name: string, org: string, richest: boolean) {
        this.id = id;
        this.name = name;
        this.org = org;
        this.richest = richest;
    }
}