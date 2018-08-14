import Ingredient from "./ingredient";
import React from "react";

const IngredientList = ({ingredients}) => 
    <ul>
        {
            ingredients.map((item, i) =>
                <Ingredient key= {i} {...item} />
            )
        }

    </ul>

export default IngredientList;