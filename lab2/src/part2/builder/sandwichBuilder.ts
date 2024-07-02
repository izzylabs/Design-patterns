import { IFoodBuilder } from "./builder";
import { Product } from "../shop";

export class Sandwich implements Product {
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
    return "sandwich";
  }
}

export class SandwichBuilder implements IFoodBuilder {
  private sandwich: Sandwich;

  constructor() {
    this.sandwich = new Sandwich();
  }

  reset() {
    this.sandwich = new Sandwich();
  }

  addCucumber() {
    this.sandwich.ingredients.push("cucumber");
  }

  addTomato() {
    this.sandwich.ingredients.push("tomato");
  }

  addMeat() {
    this.sandwich.ingredients.push("meat");
  }

  addCheese() {
    this.sandwich.ingredients.push("cheese");
  }

  addMayonnaise() {
    this.sandwich.ingredients.push("mayonnaise");
  }

  addKetchup() {
    this.sandwich.ingredients.push("ketchup");
  }

  addOnion() {
    this.sandwich.ingredients.push("onion");
  }

  addLettuce() {
    this.sandwich.ingredients.push("lettuce");
  }

  addOil() {
    this.sandwich.ingredients.push("oil");
  }

  addVinegar() {
    this.sandwich.ingredients.push("vinegar");
  }

  addGarlic(): void {
    this.sandwich.ingredients.push("garlic");
  }

  addMustard(): void {
    this.sandwich.ingredients.push("mustard");
  }

  addBread(): void {
    this.sandwich.ingredients.push("bread");
  }

  getSandwich() {
    const sandwich = this.sandwich;
    this.reset();
    return sandwich;
  }
}
