export interface IFoodBuilder {
  addCucumber(): void;
  addTomato(): void;
  addMeat(): void;
  addCheese(): void;
  addMayonnaise(): void;
  addKetchup(): void;
  addOnion(): void;
  addLettuce(): void;
  addOil(): void;
  addVinegar(): void;
  addGarlic(): void;
  addMustard(): void;
  addBread(): void;
}

export class FoodDirector {
  private foodBuilder?: IFoodBuilder;

  setBuilder(builder: IFoodBuilder) {
    this.foodBuilder = builder;
  }

  greekSalad() {
    if (!this.foodBuilder) {
      throw new Error("Food builder is not set");
    }
    this.foodBuilder.addOil();
    this.foodBuilder.addCheese();
    this.foodBuilder.addOnion();
    this.foodBuilder.addMustard();
    this.foodBuilder.addGarlic();
  }

  ceasarSalad() {
    if (!this.foodBuilder) {
      throw new Error("Food builder is not set");
    }
    this.foodBuilder.addMayonnaise();
    this.foodBuilder.addVinegar();
    this.foodBuilder.addMustard();
    this.foodBuilder.addGarlic();
  }

  createSandwich() {
    if (!this.foodBuilder) {
      throw new Error("Food builder is not set");
    }
    this.foodBuilder.addCheese();
    this.foodBuilder.addBread();
    this.foodBuilder.addMayonnaise();
  }
}