import React from 'react';
import { Link } from 'react-router-dom';
import './Food.css';

const Food = (props) => {
    // console.log(props.food)
    const {strMealThumb, strMeal, strInstructions, idMeal} = props.food
    return (
        <div>
            {/* Foods */}
            <div className="border-4 border-gray m-3">
                <div className="flex justify-center">
                    <img src={strMealThumb} alt="Empty" width="200px"/>
                </div>
                <div className="p-3">
                    <h1 className="text-xl font-bold">{strMeal}</h1>
                    <p>{strInstructions.slice(0, 100)}</p>
                    {/* <p><a href={strYoutube}>Go to youtube</a></p> */}
                    <div className="text-center m-2"><button className="bg-green-600 text-center py-2 px-5 border-0 rounded"><Link to={`/foodDetails/${idMeal}`}>Details</Link></button></div>
                    
                </div>
            </div>
        </div>
    );
};

export default Food;