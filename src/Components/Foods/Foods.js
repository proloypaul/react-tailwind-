import React, { useEffect, useState } from 'react';
import Food from '../Food/Food';

const Foods = () => {
    const [searchReasult, setSearchResult] = useState('')
    const handleSearch = event => {
        // console.log(event.target.value)
        const searchValue = event.target.value;
        setSearchResult(searchValue)
    }
    const [foods, setFoods] = useState([]);
    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchReasult}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setFoods(data.meals))
    },[searchReasult])
    return (
        <div>
            <div className="text-center m-5 ">
            <input type="text" placeholder="search your food" onChange={handleSearch} className="w-1/2 border-2 border-black p-2"/>
            </div>
            <div className="grid grid-cols-3">
                {
                    foods.map(food => <Food
                        key={food.idMeal} 
                        food={food}
                        ></Food>)
                }
            </div>

        </div>
    );
};

export default Foods;