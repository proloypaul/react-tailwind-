import React from 'react';

const DisplayDetails = (props) => {
    const {strMeal, strArea, strYoutube} = props.detail
    return (
        <div>
            <div className="flex ">
                <h1 className="m-5">{strMeal}</h1>
                <h3 className="m-5">{strArea}</h3>
                <button href={strYoutube} className="bg-green-600 m-5 text-center py-2 px-5 border-0 rounded">Youtube Video</button>
            </div>
        </div>
    );
};

export default DisplayDetails;