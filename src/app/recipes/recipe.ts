import {Ingredient} from '../shared/ingridient';
export class Recipe {
  constructor(public name: string, public description: string, public imagePath: string,
              public ingredients: Ingredient[]) {
  }
}
