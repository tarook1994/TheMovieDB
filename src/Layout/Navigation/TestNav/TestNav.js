import React from 'react';
import './TestNav.css'
import { Link, NavLink } from 'react-router-dom';
import { NavHashLink  } from 'react-router-hash-link';

const testNav = (props) => {
    return (
        <div id="header-wrapper">
            <div id="header" className="container">
                <div id="menu">
                    <ul>
                        <li >

                            <NavLink smooth to="/popular" onClick={() => props.click('popular')} 
                            activeStyle={{
                                background: '#2651a8',
                                borderRadius: '6px',
                                color: 'white'
                            }}
                            >Homepage</NavLink>
                        </li>
                        <li>
                            <NavLink
                                exact
                                to="/upcoming" onClick={() => props.click('upcoming')} activeStyle={{
                                    background: '#2651a8',
                                    borderRadius: '6px',
                                    color: 'white'
                                }}>Upcoming</NavLink></li>
                        <li><NavLink
                            exact
                            activeStyle={{
                                background: '#2651a8',
                                borderRadius: '6px',
                                color: 'white'
                            }} to="/toprated" onClick={() => props.click('top_rated')}>Top Rated</NavLink></li>
                        <li><NavLink
                            exact
                            activeStyle={{
                                background: '#2651a8',
                                borderRadius: '6px',
                                color: 'white'
                            }} to="/aboutus" 
                            onClick={() => props.click('aboutus')}>About Us</NavLink></li>
                    </ul>
                </div>
            </div>
            <div id="banner" className="container">
                <div className="title">
                    Best
                </div>
                
            </div>
        </div>
    )
}

export default testNav;