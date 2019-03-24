import React from 'react';
import './TestNav.css'

const testNav = (props) => {
    return (
        <div id="header-wrapper">
            <div id="header" className="container">
                <div id="menu">
                    <ul>
                        <li className="active"><a href="/popular" accessKey="1" title="">Homepage</a></li>
                        <li><a href="/upcoming" accessKey="2" title="">Upcoming</a></li>
                        <li><a href="/toprated" accessKey="3" title="">Top Rated</a></li>
                        <li><a href="#" accessKey="5" title="">About Us</a></li>
                    </ul>
                </div>
            </div>
            <div id="banner" className="container">
                <div className="title">
               Best
                </div>
                <ul className="actions">
                    <li><a href="#" className="button">Start Surfing</a></li>
                </ul>
            </div>
        </div>
    )
}

export default testNav;