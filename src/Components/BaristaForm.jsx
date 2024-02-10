import React, { useState } from "react";
import RecipeChoices from './RecipeChoices';
import drinksJson from '../drinks.json';

const BaristaForm = () => {
    const [inputs, setInputs] = useState({
        'temperature': '',
        'milk': '',
        'syrup': '',
        'blended': ''
    });

    const [currentDrink, setCurrentDrink] = useState('');
    const [trueRecipe, setTrueRecipe] = useState({});
    const [correct_temp, setCheckedTemperature] = useState('');
    const [correct_syrup, setCheckedSyrup] = useState('');
    const [correct_milk, setCheckedMilk] = useState('');
    const [correct_blended, setCheckedBlended] = useState('');


    const getNextDrink = () => {
        let randomDrinkIndex = Math.floor(Math.random() * drinksJson.drinks.length);
        setCurrentDrink(drinksJson.drinks[randomDrinkIndex].name);
        setTrueRecipe(drinksJson.drinks[randomDrinkIndex].ingredients);
    }

    const onNewDrink = () => {
        setInputs({
            'temperature': '',
            'milk': '',
            'syrup': '',
            'blended': ''
        });
        setCheckedTemperature('');
        setCheckedSyrup('');
        setCheckedMilk('');
        setCheckedBlended('');

        getNextDrink();

    }

    const ingredients = {
        'temperature': ['hot', 'lukewarm', 'cold'],
        'syrup': ['mocha', 'vanilla', 'toffee', 'maple', 'caramel', 'other', 'none'],
        'milk': ['cow', 'oat', 'goat', 'almond', 'none'],
        'blended': ['yes', 'turbo', 'no']
    }

    const onCheckAnswer = () => {


        const validTemperatures = ingredients['temperature'];
        const validSyrups = ingredients['syrup'];
        const validMilks = ingredients['milk'];
        const validBlendedOptions = ingredients['blended'];

        // logic to check the temperature
        if (!validTemperatures.includes(inputs['temperature'])) {
            alert("For temperature, that isn't even an option!");
            setCheckedTemperature('wrong');
        } else if (trueRecipe['temp'] !== inputs['temperature']) {
            setCheckedTemperature('wrong');
        } else {
            setCheckedTemperature('correct');
        }


        // logic to check the milk
        if (!validMilks.includes(inputs['milk'])) {
            alert("For milk, that isn't even an option!");
            setCheckedMilk('wrong');
        } else if (trueRecipe['milk'] !== inputs['milk']) {
            setCheckedMilk('wrong');
        } else {
            setCheckedMilk('correct');
        }

        // logic to check the syrup
        if (!validSyrups.includes(inputs['syrup'])) {
            alert("For syrup, that isn't even an option!");
            setCheckedSyrup('wrong');
        } else if (trueRecipe['syrup'] !== inputs['syrup']) {
            setCheckedSyrup('wrong');
        } else {
            setCheckedSyrup('correct');
        }

        // logic to check the blended
        if (!validBlendedOptions.includes(inputs['blended'])) {
            alert("For blended, that isn't even an option!");
            setCheckedBlended('wrong');
        } else if (trueRecipe['blended'] !== inputs['blended']) {
            setCheckedBlended('wrong');
        } else {
            setCheckedBlended('correct');
        }
    }


    const handleChange = (e) => {
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    return (
        <>
            <div className="drink-container">
                <h2 className="mini-header">{currentDrink}</h2>
                <button type="button" className="button newdrink" onClick={onNewDrink}>🔄</button>
            </div>

            <form>
                <div className="mini-container">
                    <h3>Temperature</h3>
                    <div className="answer-space" id={correct_temp}>
                        {inputs["temperature"]}
                    </div>
                    <RecipeChoices
                        handleChange={handleChange}
                        label="temperature"
                        choices={ingredients["temperature"]}
                        checked={inputs["temperature"]}
                    />
                </div>

                <div className="mini-container">
                    <h3>Milk</h3>
                    <div className="answer-space" id={correct_milk}>
                        {inputs["milk"]}
                    </div>
                    <RecipeChoices
                        handleChange={handleChange}
                        label="milk"
                        choices={ingredients["milk"]}
                        checked={inputs["milk"]}
                    />
                </div>

                <div className="mini-container">
                    <h3>Syrup</h3>
                    <div className="answer-space" id={correct_syrup}>
                        {inputs["syrup"]}
                    </div>
                    <RecipeChoices
                        handleChange={handleChange}
                        label="syrup"
                        choices={ingredients["syrup"]}
                        checked={inputs["syrup"]}
                    />
                </div>

                <div className="mini-container">
                    <h3>Blended</h3>
                    <div className="answer-space" id={correct_blended}>
                        {inputs["blended"]}
                    </div>
                    <RecipeChoices
                        handleChange={handleChange}
                        label="blended"
                        choices={ingredients["blended"]}
                        checked={inputs["blended"]}
                    />
                </div>
            </form>

            <button type="submit" className="button submit" onClick={onCheckAnswer}>
                Check Answer
            </button>
            <button type="button" className="button submit" onClick={onNewDrink}>
                New Drink
            </button>
        </>
    );
};

export default BaristaForm;