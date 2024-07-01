import { Product } from '../Models/Product';
import { SortStrategy } from './PriceSortStrategy'; // Import the SortStrategy interface

export class NameSortStrategy implements SortStrategy {
    sort(products: Product[]): Product[] {
        return products.sort((a, b) => a.getName().localeCompare(b.getName()));
    }
}