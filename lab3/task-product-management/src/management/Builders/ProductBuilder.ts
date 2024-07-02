import { Product, Laptop } from '../Models/Product';

export class ProductBuilder {
    private name!: string;
    private price!: number;

    setName(name: string): ProductBuilder {
        this.name = name;
        return this;
    }

    setPrice(price: number): ProductBuilder {
        this.price = price;
        return this;
    }

    build(): Product {
        return new Laptop(this.name, this.price);
    }
}