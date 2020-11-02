describe('what', () => {

    describe('declaring variables and stuff', () => {
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
            sample = 0o22; //base 8
            sample = 0b01010; // base 2 - binary
            sample = 18_989_098_928.22;

            sample = parseFloat('555.5');
            expect(sample).toBe(555.5);
        });

    });

    describe('some strings', () => {
        it('delimiting strings', () => {
            const message1 = 'Hello How Are You?';
            const message2 = "Hello How Are You?";

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
    })
});