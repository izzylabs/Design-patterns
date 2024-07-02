import { IFoodBuilder } from "./builder";
import { Product } from "../shop";

export class Salad implements Product {
  ingredients: string[] = [];

  getIngredients() {
    return this.ingredients;
  }

  getCreationDate(): Date {
    return new Date();
  }

  getExpirationDate(): Date {
    const date = new Date();
    date.setDate(date.getDate() + 6);
    return date;
  }

  getName(): string {
    return "salad";
  }
}

export class SaladBuilder implements IFoodBuilder {
  private salad: Salad;

  constructor() {
    this.salad = new Salad();
  }

  reset() {
    this.salad = new Salad();
  }

  addCucumber() {
    this.salad.ingredients.push("cucumber");
  }

  addTomato() {
    this.salad.ingredients.push("tomato");
  }

  addMeat() {
    this.salad.ingredients.push("meat");
  }

  addCheese() {
    this.salad.ingredients.push("cheese");
  }

  addMayonnaise() {
    this.salad.ingredients.push("mayonnaise");
  }

  addKetchup() {
    this.salad.ingredients.push("ketchup");
  }

  addOnion() {
    this.salad.ingredients.push("onion");
  }

  addLettuce() {
    this.salad.ingredients.push("lettuce");
  }

  addOil() {
    this.salad.ingredients.push("oil");
  }

  addVinegar() {
    this.salad.ingredients.push("vinegar");
  }

  addGarlic(): void {
    this.salad.ingredients.push("garlic");
  }

  addMustard(): void {
    this.salad.ingredients.push("mustard");
  }

  addBread(): void {
    this.salad.ingredients.push("bread");
  }

  getSalad() {
    const salad = this.salad;
    this.reset();
    return salad;
  }
}
