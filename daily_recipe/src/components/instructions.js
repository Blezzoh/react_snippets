import React from "react";

const Instructions = ({steps, title}) => {
    return (
        <section>
            <h3> {title} </h3>
            <ul>
                {
                    steps.map((step, i) => 
                    <li key ={i} className="list-item">
                        {step}
                    </li>
                    )
                }
            </ul>
        </section>
        );
    }
    
    export default Instructions;