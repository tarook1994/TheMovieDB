import React from 'react';
import './TestNav.css'
import { Link } from 'react-router-dom';

const testNav = (props) => {
    return (
        <div id="header-wrapper">
            <div id="header" className="container">
                <div id="menu">
                    <ul>
                        <li className="active">
                            <Link to="/popular" onClick={() => props.click('popular')}>Homepage</Link>
                        </li>
                        <li>
                            <Link to="/upcoming" onClick={() => props.click('upcoming')}>Upcoming</Link></li>
                        <li><Link to="/toprated" onClick={() => props.click('top_rated')}>Top Rated</Link></li>
                        <li><Link to="/aboutus" >About Us</Link></li>
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