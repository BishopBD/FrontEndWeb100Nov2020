import { Employee, Retiree, IHaveAName } from '../src/hr';

// 1. I have to import waaaaay too much stuff.
// 2. I want to know what things I SHOULD import, so I don't import something I shouldn't;

describe('creating and uisiomng classes', () => {

    it('creating an employee', () => {
        const carla = new Employee('Carla', 'Jones', 'CEO', 182_000);
        expect(carla.firstName).toBe('Carla');
        expect(carla.lastName).toBe('Jones');
        expect(carla.fullName).toBe('Jones, Carla');
        // Cannot set salary, e.g. NO carla.salary = 250_000

        carla.giveRaise(1000);
        expect(carla.salary).toBe(183_000);

        displayName(carla);

        displayName({ fullName: 'Boba Fett' });

        function displayName(thingy: IHaveAName) {
            console.log(`***||${thingy.fullName}||***`);
        }
    });

    it('we can create a retiree', () => {
        const paul = new Retiree('Paul', 'Jones', 83_000);
    });

});