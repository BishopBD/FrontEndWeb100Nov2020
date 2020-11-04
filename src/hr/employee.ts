import { Person } from './person';

export class Employee extends Person {
    private _salary: number;

    constructor(
        firstName: string,
        lastName: string,
        public job: string,
        salary: number) {

        super(firstName, lastName)
        this._salary = salary;
    }

    get fullName(): string {
        return `${this.lastName}, ${this.firstName}`;
    }

    get salary(): number {
        return this._salary;
    }

    giveRaise(amount: number): void {
        this._salary += amount;
    }
}