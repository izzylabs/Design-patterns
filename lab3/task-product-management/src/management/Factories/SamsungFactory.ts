import { AbstractFactory } from './AbstractFactory';
import { Laptop, Product, Smartphone } from '../Models/Product';

export class SamsungFactory implements AbstractFactory {
    createLaptop(): Product {
        return new Laptop('Galaxy Book', 1500);
    }

    createSmartphone(): Product {
        return new Smartphone('Galaxy S', 1000);
    }
}