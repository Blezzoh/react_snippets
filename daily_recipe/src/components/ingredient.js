import React from "react";

const Ingredient = ({name, amount, measurement}) =>{
    return  (<li className="list-item" > {amount} {measurement}, {name}</li>);
}

export default Ingredient;