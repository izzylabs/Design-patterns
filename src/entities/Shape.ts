export abstract class Shape {
    constructor(public id: string, public name: string) {}

    abstract area(): number;
    abstract perimeter(): number;
}

