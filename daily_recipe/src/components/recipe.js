import Instructions from "./instructions";
import IngredientList from "./ingredientList";
import React from "react";

const Recipe = ({name, ingredients, steps}) =>{
  console.log( ingredients)
  return (
  <section className="recipe-item">
      <h2>{name}</h2>
      <h3>Ingredients</h3>
      <IngredientList ingredients= {ingredients} />
      <Instructions title = {"steps"} steps = {steps} />
    </section>
  );
}
export default Recipe;
//      