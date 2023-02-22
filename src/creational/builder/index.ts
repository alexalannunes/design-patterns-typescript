import { MainDishBuilder } from "./classes/main-dish-builder";
import { VeganDishBuilder } from "./classes/vegan-dish-builder";

const mainDishBuilder = new MainDishBuilder();
mainDishBuilder.makeMeal().makeDessert();
console.log(mainDishBuilder.getMeal());

const veganDishBuilder = new VeganDishBuilder();

const vegan = veganDishBuilder.makeMeal();
console.log(vegan.getMeal(), vegan.getMeal().getPrice());
