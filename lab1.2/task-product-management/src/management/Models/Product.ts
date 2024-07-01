export interface Product {
    getName(): string;
    getPrice(): number;
}

export class Laptop implements Product {
    constructor(private name: string, private price: number) {}

    getName(): string {
        return this.name;
    }

    getPrice(): number {
        return this.price;
    }
}

export class Smartphone implements Product {
    constructor(private name: string, private price: number) {}

    getName(): string {
        return this.name;
    }

    getPrice(): number {
        return this.price;
    }
}