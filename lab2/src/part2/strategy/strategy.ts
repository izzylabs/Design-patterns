import { Product } from "../shop";

export interface ISortingStrategy {
  sort(products: Product[]): Product[];
}

export class CreationDateSortingStrategy implements ISortingStrategy {
  sort(products: Product[]): Product[] {
    return products.sort(
      (a, b) => Number(a.getCreationDate()) - Number(b.getCreationDate()),
    );
  }
}

export class ExpirationDateSortingStrategy implements ISortingStrategy {
  sort(products: Product[]): Product[] {
    return products.sort(
      (a, b) => Number(a.getExpirationDate()) - Number(b.getExpirationDate()),
    );
  }
}

export class NameSortingStrategy implements ISortingStrategy {
  sort(products: Product[]): Product[] {
    return products.sort((a, b) => a.getName().localeCompare(b.getName()));
  }
}