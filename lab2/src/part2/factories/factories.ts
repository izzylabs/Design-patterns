import {
  CookedBeef,
  CookedChicken,
} from "./products/cookedProducts";
import { RawBeef, RawChicken} from "./products/rawProducts";
import { IFoodFactory } from "./interfaces";

export class RawFoodFactory implements IFoodFactory {
  
  createChicken() {
    return new RawChicken();
  }

  createBeef() {
    return new RawBeef();
  }
}

export class CookedFoodFactory implements IFoodFactory {

  createChicken() {
    return new CookedChicken();
  }

  createBeef() {
    return new CookedBeef();
  }
}
