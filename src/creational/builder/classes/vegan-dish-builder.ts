import { MealBuilderProtocol } from "../interfaces/meal-builder-protocol";
import { MealBox } from "./meal-box";
import { Beans, Rice } from "./meals";

export class VeganDishBuilder implements MealBuilderProtocol {
  private _meal: MealBox = new MealBox();

  reset(): this {
    this._meal = new MealBox();
    return this;
  }

  makeMeal(): this {
    const rice = new Rice("arroz", 5);
    const beans = new Beans("feijão", 15);

    this._meal.add(rice, beans);

    return this;
  }

  getMeal(): MealBox {
    return this._meal;
  }
}