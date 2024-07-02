import { Product } from "../shop";

export interface IFoodFactory {
  createChicken(): IChicken;
  createBeef(): IBeef;
}

export interface IChicken extends Product {
  getExpirationDate(): Date;
}

export interface IBeef extends Product {
  getExpirationDate(): Date;
}