import React from 'react';
import './TestNav.css'

const testNav = (props) => {
    return (
        <div id="header-wrapper">
            <div id="header" className="container">
                <div id="logo">
                    <h1><a href="#">Movie Finder</a></h1>
                </div>
                <div id="menu">
                    <ul>
                        <li className="active"><a href="#" accesskey="1" title="">Homepage</a></li>
                        <li><a href="#" accesskey="2" title="">Top Rated</a></li>
                        <li><a href="#" accesskey="3" title="">Most Viewed</a></li>
                        <li><a href="#" accesskey="5" title="">About Us</a></li>
                    </ul>
                </div>
            </div>
            <div id="banner" className="container">
                <div className="title">
               
                </div>
                <ul className="actions">
                    <li><a href="#" className="button">Start Surfing</a></li>
                </ul>
            </div>
        </div>
    )
}

export default testNav;