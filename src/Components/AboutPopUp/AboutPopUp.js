import React from 'react';
import './AboutPopUp.css'
import image from '../../Assets/Images/myimage.jpg'
import android from '../../Assets/Images/android.png'
import mysql from '../../Assets/Images/mysql.png'
import react from '../../Assets/Images/react.png'
import spring from '../../Assets/Images/spring.png'


const aboutPopUp = (props) => {
    return (
        <div className="hover_bkgr_fricc" onClick={props.remove}>
            <span className="helper"></span>
            <div className="content-holder">
                <img className="about-img" src={image}></img>
                <p className="name">{props.data.name}</p>
                <div className="icons">
                    <img src={android}></img>
                    <img src={spring}></img>
                    <img src={mysql}></img>
                    <img src={react}></img>
                </div>
                <p>{props.data.bio}</p>
                <button>Email</button>
                <button>Github</button>
            </div>
        </div>
    )
}

export default aboutPopUp;