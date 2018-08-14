import Recipe from "./recipe";
import React from "react";

const Menu = ({title, recipes}) => 
    {
      console.log(recipes);
      return (
      <article id="main-container">
        <header> 
            <h1> {title} </h1>
        </header>
        <div className="recipes-container">
            {
                recipes.map(
                    (recipe, i)=> <Recipe key={i} {... recipe}/>
                )
            }
        </div>
      </article>
    )
        
}

export default Menu;