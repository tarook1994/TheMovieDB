import React from 'react';
import './Footer.css'

const footer = (props) => {
    return (
        <div id="copyright" className="containerTwo">
            <p>&copy; Untitled. All rights reserved. | Photos by
                <a href="#"> Fotogrph</a> | Design by
                <a href="#" rel="nofollow"> Ahmed Tarek</a>.
                </p>
        </div>
    )
}

export default footer;