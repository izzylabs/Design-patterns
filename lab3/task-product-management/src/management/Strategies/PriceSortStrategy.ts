import { Product } from '../Models/Product';

export interface SortStrategy {
    sort(products: Product[]): Product[];
}

export class PriceSortStrategy implements SortStrategy {
    sort(products: Product[]): Product[] {
        return products.sort((a, b) => a.getPrice() - b.getPrice());
    }
}