import { Skill } from './skill';
import { Interest } from './interest';

export class People {
    id: number;
    name: string;
    org: string;
    richest: boolean;
    skills: Skill[];
    interests: Interest[];
}