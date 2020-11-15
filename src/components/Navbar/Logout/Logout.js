import React from 'react';
import './Logout.css';
import logoutpic from '../../../assets/logout.jpg'

// function Logout
const Logout = (props) => {

    const logout = () => {
        props.clearToken()
    }

    return (
        <div>
            <img id="logout" className="logout" src={logoutpic} alt="logout" onClick={logout} />
           
        </div>
    )
}

export default Logout;