import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import DisplayDetails from '../DisplayDetails/DisplayDetails';

const FoodDetails = () => {
    // const params = useParams();
    // console.log(params)
    const [details, setDetails] = useState([])
    const {IdMeal} = useParams();
    useEffect(() => {
        const url  = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${IdMeal}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                // console.log(data.meals)
                setDetails(data.meals)
            });

    }, [])
   
    return (
        <div>
            <h1 className="text-3xl text-center font-bold ">Food Id {IdMeal}</h1>
            <div className="bg-gray-400 w-1/2 border-0 rounded px-5 py-3"> 
                {
                    details.map(detail => <DisplayDetails key={detail.idMeal} detail={detail}></DisplayDetails>)
                }
            </div>
        </div>
    );
};

export default FoodDetails;