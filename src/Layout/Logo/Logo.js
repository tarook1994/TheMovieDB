import React from 'react';
import logoImage from '../../Assets/Images/movielogo.png'
import './Logo.css'

const logo = (props) => {
    return (
        <div className="Logo">
            <img src={logoImage} className="Img"></img>
        </div>
    )
}

export default logo;