import { Product } from '../Models/Product';

export interface AbstractFactory {
    createLaptop(): Product;
    createSmartphone(): Product;
}