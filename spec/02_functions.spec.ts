import { isEven, TagMaker } from '../src/utils';
describe('functions', () => {
    describe('parameters and overloading etc.', () => {

        describe('higher-ordered functions', () => {

            // a function that takes one or more functions as arguments, or returns a function is HOF
            it('making a tagmaker function', () => {
                function tagMaker(element: string, content: string): string {
                    return `<${element}>${content}</${element}>`;
                }

                expect(tagMaker('h1', 'Hello')).toBe('<h1>Hello</h1>');
            });

            it('an OOP example', () => {

                const h1Maker = new TagMaker('h1');
                const pMaker = new TagMaker('p');

                expect(h1Maker.make('Hello')).toBe('<h1>Hello</h1>');
                expect(pMaker.make('Goodbye')).toBe('<p>Goodbye</p>');
            });

            it('a functional programmer approach', () => {
                function tagMaker(element: string): (content: string) => string {
                    return (c) => `<${element}>${c}</${element}>`;
                }

                const h1Maker = tagMaker('h1');
                const pMaker = tagMaker('p');

                expect(h1Maker('Hello')).toBe('<h1>Hello</h1>');
                expect(pMaker('Goodbye')).toBe('<p>Goodbye</p>');
            });
        });

        it('destructuring argumenets', () => {
            interface HttpStuff { method: 'GET' | 'POST' | 'PUT' | 'DELETE', format: string }
            function doApiCall(url: string, { method, format }: HttpStuff): void {
                console.log(`Making a request to ${url} using ${method} and format ${format}`);
            }

            doApiCall('/books', { method: 'GET', format: 'application/json' });
        });

        it('default values for functions', () => {
            function add(a: number = 2, b: number = 10, ...rest: number[]): number {
                const firstTwo = a + b;
                return rest.reduce((lhs, rhs) => rhs + lhs, firstTwo);
            }

            expect(add(2, 2)).toBe(4);
            expect(add(10)).toBe(20);
            expect(add()).toBe(12);
            expect(add(undefined, 8)).toBe(10);
            expect(add(1, 2, 3, 4, 5, 6, 7, 8, 9)).toBe(45);

        });

        describe('spread operator', () => {
            it('spreading on arrays', () => {
                const starter = [1, 2, 3, 4, 5];
                const newArray = [1, ...starter, 6]
                expect(newArray).toEqual([1, 1, 2, 3, 4, 5, 6]);
                expect(starter).toEqual([1, 2, 3, 4, 5]);
            });

            it('spread operator', () => {
                const movie = {
                    title: 'Wild at Heart',
                    director: 'Lynch',
                    yearReleased: 2005
                }

                const movie2 = { ...movie, mpaaRating: 'R' };
                expect(movie2).toEqual({
                    title: 'Wild at Heart',
                    director: 'Lynch',
                    yearReleased: 2005,
                    mpaaRating: 'R'
                });

                expect(movie).toEqual({
                    title: 'Wild at Heart',
                    director: 'Lynch',
                    yearReleased: 2005
                });
            });

        });

        it('you cannot overload', () => {
            function formatName(first: string, last: string, mi?: string): string {
                if (mi) {
                    return `${last}, ${first} ${mi}`;
                } else {
                    return `${last}, ${first}`;
                }

            }
            expect(formatName('Han', 'Solo')).toBe('Solo, Han');
            expect(formatName('Han', 'Solo', 'B')).toBe('Solo, Han B');
        });

        it('falsy and truthy', () => {
            expect(undefined).toBeFalsy();
            expect(null).toBeFalsy();
            expect(0).toBeFalsy();
            expect(1).toBeTruthy();
            expect(-1).toBeTruthy();
            expect('').toBeFalsy();
            expect(' ').toBeTruthy();
            const numbers = [1, 2, 3];
            expect(numbers).toBeTruthy();
            expect(numbers[0]).toBeTruthy();
            expect(numbers[99]).toBeFalsy();
        });

        it('null coalescing stuff', () => {
            const answer = null || false || 0 || undefined || '' || 'tacos';
            expect(answer).toBe('tacos');

            interface Person {
                name: string;
                age: number;
                job?: {
                    title: string;
                    salary: number;
                }
            }

            const bob: Person = {
                name: 'Robert',
                age: 52,
                job: {
                    title: 'CEO',
                    salary: 32_000
                }
            };

            const name = bob.name;
            const pay = bob.job?.salary;

        });

    });

});

// function getRandomInt(min: number)

describe('common array methods', () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    it('has a way to look at just each member of an array', () => {
        numbers.forEach((e, i, c) => console.log(e, i, c));
    });

    describe('array methods that create new arrays', () => {
        it('filtering', () => {
            // like Select in C# LINQ
            const evens = numbers.filter(isEven);

            expect(evens).toEqual([2, 4, 6, 8]);
            expect(numbers).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);

            const friends = ['Bill', 'Amy', 'Jessica', 'Billy', 'Sean'];
            const newFriends = friends.filter(f => f !== 'Billy');

            expect(newFriends).toEqual(['Bill', 'Amy', 'Jessica', 'Sean']);

        });

        it('mutating each element to create a new elements', () => {
            const doubled = numbers.map(n => n * 2);
            expect(doubled).toEqual([2, 4, 6, 8, 10, 12, 14, 16, 18]);

            const x = numbers.map(n => isEven(n) ? 'Even' : 'Odd');
            expect(x).toEqual(['Odd', 'Even', 'Odd', 'Even', 'Odd', 'Even', 'Odd', 'Even', 'Odd']);
        });

    });

    describe('methods that return a single (scalar) value', () => {
        it('checking the membership of an array', () => {
            const allEven = numbers.every(isEven);
            expect(allEven).toBe(false);

            const someEven = numbers.some(isEven);
            expect(someEven).toBe(true);
        });

        it('reduce - boil it down to a single value', () => {
            const sum = numbers.reduce((s, n) => s + n);
            expect(sum).toBe(45);

            const sum2 = numbers.reduce((s, n) => s + n, 100);
            expect(sum2).toBe(145);
        });
    });

    describe('practice', () => {
        it('try it', () => {
            interface Vehicle {
                vin: string;
                make: string;
                model: string;
                mileage: number;
            }

            const vehicles: Vehicle[] = [
                { vin: '8888', make: 'Chevy', model: 'Bolt', mileage: 18_540 },
                { vin: '13oionf2', make: 'Honda', model: 'Pilot', mileage: 52_345 },
                { vin: '34r523', make: 'Dodge', model: 'RAM', mileage: 82_233 }
            ]

            const highMileageVehicles = vehicles
                .filter(v => v.mileage > 50_000)
                .map(v => `${v.make} ${v.model}`);

            expect(highMileageVehicles).toEqual(['Honda Pilot', 'Dodge RAM']);
        });

    });
});