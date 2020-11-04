import { Person } from './person';

export class Retiree extends Person {

    constructor(
        firstName: string,
        lastName: string,
        public pension: number
    ) {
        super(firstName, lastName);
    }
}