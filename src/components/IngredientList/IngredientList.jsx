// src/components/IngredientList/IngredientList.jsx

import "../ingredient.css";

const IngredientList = (props) => {
    return <ul>
        {props.ingredients.map((entry, index) =>
            <li key={index}><div className="ingredient">{entry.name}<div className="space"></div><button id={entry.name} onClick={props.addIngredient}>Add</button></div></li>
        )}
    </ul>;
};

export default IngredientList;
