// src/components/BurgerStack/BurgerStack.jsx

import "../ingredient.css";


const BurgerStack = (props) => {
    return <ul>
        {props.ingredients.map((entry, index) =>
            <li key={index}><div className="ingredient">{entry.name}<div className="space"></div><button id={entry.name} color={entry.color} onClick={props.removeIngredient}>Remove</button></div></li>
        )}
    </ul>;
};

export default BurgerStack;
