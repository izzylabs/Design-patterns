import { AbstractFactory } from './AbstractFactory';
import { Laptop, Product, Smartphone } from '../Models/Product';

export class AppleFactory implements AbstractFactory {
    createLaptop(): Product {
        return new Laptop('MacBook Pro', 2500);
    }

    createSmartphone(): Product {
        return new Smartphone('iPhone', 1200);
    }
}