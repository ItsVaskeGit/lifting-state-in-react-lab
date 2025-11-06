// src/App.jsx

import './App.css';
import IngredientList from "./components/IngredientList/IngredientList.jsx";
import BurgerStack from "./components/BurgerStack/BurgerStack.jsx";
import { useState } from "react";

const App = () => {

    const [stack, setStack] = useState([]);
    const [count, setCount] = useState(0);

    const [availableIngredients, setAvailableIngredients] = useState([
        { name: 'Kaiser Bun', color: 'saddlebrown' },
        { name: 'Sesame Bun', color: 'sandybrown' },
        { name: 'Gluten Free Bun', color: 'peru' },
        { name: 'Lettuce Wrap', color: 'olivedrab' },
        { name: 'Beef Patty', color: '#3F250B' },
        { name: 'Soy Patty', color: '#3F250B' },
        { name: 'Black Bean Patty', color: '#3F250B' },
        { name: 'Chicken Patty', color: 'burlywood' },
        { name: 'Lettuce', color: 'lawngreen' },
        { name: 'Tomato', color: 'tomato' },
        { name: 'Bacon', color: 'maroon' },
        { name: 'Onion', color: 'lightyellow' },
        { name: 'Cheddar Cheese', color: '#FDE18B' },
        { name: 'Swiss Cheese', color: '#F1E1A8' },
    ]);

    const addOne = () => {
        setCount(count + 1);
    }

    const removeOne = () => {
        setCount(count - 1);
    }

    const addIngredient = (event) => {
        let newIngredient = availableIngredients.find(
            (entry) => {return entry.name === event.target.id});
        const newStack = stack.slice();
        newStack.push({name: newIngredient.name, color: newIngredient.color});
        const newIngredients = [...availableIngredients];
        newIngredients.splice(availableIngredients.findIndex((entry) => {return entry.name === event.target.id}), 1);
        setAvailableIngredients(newIngredients);
        addOne();
        setStack(newStack);
    }

    const removeIngredient = (event) => {
        const newIngredients = [...availableIngredients];
        newIngredients.push({name: event.target.id, color: event.target.color});
        setAvailableIngredients(newIngredients)
        const newStack = [...stack];
        newStack.splice(stack.find((entry) => {return entry.name === event.target.id}), 1);
        removeOne();
        setStack(newStack);
    }

    return (
        <main>
            <h1>Burger Stacker</h1>
            <h2>Ingredients in stack: {count}</h2>
            <section>
                <IngredientList ingredients={availableIngredients} addIngredient={addIngredient}/>
                <BurgerStack ingredients={stack} removeIngredient={removeIngredient}/>
            </section>
        </main>
    );
};

export default App;
