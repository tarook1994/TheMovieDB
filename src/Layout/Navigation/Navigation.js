import React from 'react';
import './Navigation.css';
import Logo from '../Logo/Logo'


const navigation = (props) => {
    return (
        <div className='Nav'>
            <header>
                <nav>
                   
                    <ul>
                      
                        <li><a>Home</a></li>
                        <li><a>Favorite Movies</a></li>

                    </ul>
                </nav>

            </header>

        </div>
    )
}
export default navigation;