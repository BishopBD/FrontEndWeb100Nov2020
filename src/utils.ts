export class TagMaker {
    constructor(private element: string) { }

    make(content: string): string {
        return `<${this.element}>${content}</${this.element}>`;
    }
}

export const isEven = (a: number) => a % 2 === 0;