import { CookedFoodFactory, RawFoodFactory } from "./factories/factories";
import { Product } from "./shop";
import { SaladBuilder } from "./builder/saladBuilder";
import { SandwichBuilder } from "./builder/sandwichBuilder";
import { FoodDirector } from "./builder/builder";

const rawFoodFactory = new RawFoodFactory();
const cookedFoodFactory = new CookedFoodFactory();

const saladBuilder = new SaladBuilder();
const sandwichBuilder = new SandwichBuilder();
const foodDirector = new FoodDirector();

export function createProducts(): Product[] {
  let products: Product[] = [];

  products = products.concat(
    Array(10)
      .fill(1)
      .map(() => rawFoodFactory.createBeef()),
  );

  products = products.concat(
    Array(10)
      .fill(1)
      .map(() => rawFoodFactory.createChicken()),
  );

  products = products.concat(
    Array(10)
      .fill(1)
      .map(() => cookedFoodFactory.createChicken()),
  );
  products = products.concat(
    Array(10)
      .fill(1)
      .map(() => cookedFoodFactory.createBeef()),
  );

  foodDirector.setBuilder(saladBuilder);
  foodDirector.greekSalad();
  const greekSalad = saladBuilder.getSalad();

  foodDirector.ceasarSalad();
  const ceasarSalad = saladBuilder.getSalad();

  foodDirector.setBuilder(sandwichBuilder);
  foodDirector.createSandwich();
  const sandwich = sandwichBuilder.getSandwich();

  products.push(greekSalad, ceasarSalad, sandwich);

  return products;
}
