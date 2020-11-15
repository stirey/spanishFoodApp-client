import React from 'react';
import './Navbar.css';
import spanishFoodPic from '../../assets/Spanish-Food.jpg'
import Logout from './Logout/Logout'

// function Navbar() {}
const Navbar = (props) => {
    return(
        <div>
            <nav>
                <img id="spanishFoodPic" src={spanishFoodPic} alt="spanishFood" />
                <Logout clearToken={props.clearToken} />
            </nav>
        </div>
    );
}

//Navbar is just the name of the function not the file
export default Navbar;

//https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export