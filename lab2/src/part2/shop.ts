import { createProducts } from "./createProducts";
import {
  CreationDateSortingStrategy,
  ExpirationDateSortingStrategy,
  NameSortingStrategy,
  ISortingStrategy,
} from "./strategy/strategy";

export interface Product {
  getCreationDate(): Date;
  getExpirationDate(): Date;
  getName(): string;
}

interface INameCounts {
  [key: string]: number;
}

class Shop {
  private strategy: ISortingStrategy = new NameSortingStrategy();
  protected products: Product[] = [];

  addProduct(product: Product) {
    this.products.push(product);
  }

  setStrategy(strategy: ISortingStrategy) {
    this.strategy = strategy;
  }

  sort(products: Product[]): Product[] {
    if (!this.strategy) {
      throw new Error("Strategy is not set");
    }
    return this.strategy.sort(products);
  }

  listProducts(): INameCounts {
    const shopProducts = products.map(product => product.getName());
    return shopProducts.reduce((counts, name) => {
      counts[name] = (counts[name] || 0) + 1;
      return counts;
    }, {} as INameCounts);
  }
}

const shop = new Shop();

const products = createProducts();

const nameStrategy = new NameSortingStrategy();
const expirationStrategy = new ExpirationDateSortingStrategy();
const creationStrategy = new CreationDateSortingStrategy();

products.forEach((product) => shop.addProduct(product));

shop.setStrategy(nameStrategy);
shop.sort(products);
console.log(shop.listProducts());

shop.setStrategy(expirationStrategy);
shop.sort(products);
console.log(shop.listProducts());

shop.setStrategy(creationStrategy);
shop.sort(products);
console.log(shop.listProducts());
