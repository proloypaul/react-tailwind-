import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>

            <div className="text-center text-blue-600">
                <NavLink to="/foods">Click this link and search your food</NavLink>
            </div>
            {/* <div className="text-center m-5 ">
            <input type="text" placeholder="search your food" className="w-1/2 border-2 border-black p-2"/>
            </div> */}

        </div>
    );
};

export default Header;