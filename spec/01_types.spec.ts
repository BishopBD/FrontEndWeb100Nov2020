describe('what', () => {

    describe('declaring variables and stuff', () => {

        it('a little review of declaring varibales', () => {
            let someVariable;

            someVariable = 'dog';
            someVariable = 3.14;
        });

        it('using let', () => {

            let x = 10;
            x = 30;

            let z = 'Dale';
            z = 'Dianne';

            let q: string[];

            q = ['bird', 'plane', 'tacos'];

            let y: any = 3;

            y = 3.14;
            y = 'Tacos are delicious';
            y = ['dog', 'cat', 'mouse'];
        });

        it('some more details about let', () => {
            let a: number | string; // Union Type.

            a = 'Pizza';

            a = 42;

            const x = 12;
            const y = 'Bird';
            const z = { cat: 'Meow' };

        });

        it('a bit about constants', () => {
            // They are names that cannot be reassigned to. That is IT. No more.

            const a = 12;
            // a = 13;

            const luckyNumbers = [7, 9, 20];

            luckyNumbers[1] = 10;

            expect(luckyNumbers).toEqual([7, 10, 20]);
        });

        it('so what is so wrong with the var keyword anyhow?', () => {

        });
    });

    describe('literals', () => {

        it('number literals', () => {
            let sample: number;
            sample = 10;
            sample = 10.5;
            sample = 0xff;
            sample = 0o22; // base 8
            sample = 0b01010; // base 2 - binary
            sample = 18_989_098_928.22;

            sample = parseFloat('555.5');
            expect(sample).toBe(555.5);
        });

    });

    describe('some strings', () => {
        it('delimiting strings', () => {
            const message1 = 'Hello How Are You?';
            const message2 = 'Hello How Are You?';

            expect(message1).toEqual(message1);
        });

        it('has format strings, too', () => {
            const story = `Chapter 1.
It was a dark and stormy night.

The End.
                `
            console.log(story);

            const name = 'Bob';
            const salary = 32_123.23;

            const report1 = 'The Employee ' + name + ' has a salary of $' + salary + ' per year';
            const report2 = `The Employee ${name} has a salary of $${salary} per year`;
            expect(report1).toEqual(report2);
        });

        describe('array literals', () => {
            it('using them', () => {
                const stuff = ['dogs', 'birds', 18];

                expect(stuff.length).toBe(3);
                stuff[2] = 'Owls';
                expect(stuff).toEqual(['dogs', 'birds', 'Owls']);

                const missing = stuff[99];
                expect(missing).toBeUndefined();

                // const someOtherArray: (string | number)[] = [];
                const someOtherArray: Array<string | number> = [];
            });
            it('using a tuple', () => {
                const warren: [string, string, number, string] = ['Warren', 'Ellis', 58, 'Musician'];
                const lName = warren[1];
                const age = warren[2];
            });

            describe('tuples and objects and stuff like that', () => {
                it('doing it with objects', () => {
                    // String FormatName(string first, string last) {... }
                    interface FormattedNameInfo { fullName: string, numberOfLetters: number }
                    function formatName(first: string, last: string): FormattedNameInfo {
                        const name = `${last}, ${first}`;
                        return {
                            fullName: name,
                            numberOfLetters: name.length
                        }
                    }
                    // const fullName = formatName('Han', 'Solo');
                    // expect(fullName.fullName).toBe('Solo, Han');
                    // expect(fullName.numberOfLetters).toBe(9);

                    // Object Destructuring
                    const { fullName, numberOfLetters } = formatName('Han', 'Solo');
                    expect(fullName).toBe('Solo, Han');
                    expect(numberOfLetters).toBe(9);
                });

                it('doing it with a tuple', () => {
                    type NameInfo = [string, number];
                    function formatName(first: string, last: string): NameInfo {
                        const name = `${last}, ${first}`;
                        return [name, name.length];
                    }
                    const info = formatName('Han', 'Solo');
                    expect(info[0]).toBe('Solo, Han');
                    expect(info[1]).toBe(9);

                    const [name, length] = formatName('Han', 'Solo');
                    expect(name).toBe('Solo, Han');
                    expect(length).toBe(9);
                });
            });
        });

        describe('object literals', () => {

            it('basic object literals', () => {
                interface Movie {
                    title: string;
                    director: string;
                    yearReleased: number;
                }
                const thor: Movie = {
                    title: 'Thor Ragnorak',
                    director: 'Taikia Waititi',
                    yearReleased: 2017
                }

                thor.yearReleased = 2016;

                const fwwm: Movie = {
                    title: 'Twin Peaks: Fire Walk With Me',
                    director: 'Lynch',
                    yearReleased: 1992
                }

                showInfo(thor);
                showInfo(fwwm);
                showInfo({ title: 'The Empire Strikes Back', director: 'Lucas', yearReleased: 1970 })

                function showInfo(movie: Movie) {
                    console.log(`Thata is ${movie.title} by ${movie.director} released in ${movie.yearReleased}`)
                }
            });


            it('structural typing with objects', () => {

                interface MessageHavingThing { message: string };
                function logIt(thingy: MessageHavingThing) {
                    console.log(`On ${new Date().toLocaleDateString()} you said ${thingy.message} `);
                }

                logIt({ message: 'Call your mom' });

                const phoneCall = {
                    from: 'Bill',
                    time: 'This morning',
                    message: 'Call Me, Dork!'
                }

                logIt(phoneCall);

            });



        });

        describe('function literals', () => {
            it('has three ways but we use two.', () => {

                expect(add(2, 3)).toBe(5);
                // Named
                function add(a: number, b: number): number {
                    return a + b;
                }

                // Anonymous functions
                const subtract = function (a: number, b: number): number {
                    return a - b;
                }

                type MathOp = (a: number, b: number) => number;
                let multiply: MathOp;
                multiply = (a: number, b: number): number => a * b;
                const divide: MathOp = (a: number, b: number): number => {
                    if (b === 0) {
                        console.log('Are you trying to open a black hole!?');
                    }

                    return a / b;
                }

                expect(subtract(10, 2)).toBe(8);
                expect(multiply(2, 2)).toBe(4);

                function doMathAndDoubleIt(op: MathOp, num1: number, num2: number): number {
                    return op(num1 + num1, num2 + num2);
                }

                // Higher-ordered function - a function that takes one or more functions as arguments, and/or returns a function.
                const result = doMathAndDoubleIt(add, 10, 5);
                const result2 = doMathAndDoubleIt(divide, 3, 8);
                const result3 = doMathAndDoubleIt((x, y) => x % y, 5, 1);
                const weridMath = (p: number, q: number) => p * 2 + q;

                expect(result).toBe(30);
                expect(result2).toBe(0.375);
                expect(result3).toBe(0);

            });

        });
    });
});