import {
  CookedBeef,
  CookedChicken,
} from "./cookedProducts";
import { IFoodFactory, IBeef, IChicken} from "../interfaces";

export class RawChicken implements IChicken {
  getExpirationDate() {
    return new Date();
  }

  getCreationDate(): Date {
    const date = new Date();
    date.setDate(date.getDate() + 5);
    return date;
  }

  getName(): string {
    return "raw chicken";
  }
}

export class RawBeef implements IBeef {
  getExpirationDate() {
    return new Date();
  }

  getCreationDate(): Date {
    const date = new Date();
    date.setDate(date.getDate() + 5);
    return date;
  }

  getName(): string {
    return "raw beef";
  }
}

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