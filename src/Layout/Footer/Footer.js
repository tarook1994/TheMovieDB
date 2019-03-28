import React from 'react';
import './Footer.css'

const footer = (props) => {
    return (
        <div id="copyright" className="containerTwo">
            <p>&copy; Untitled. All rights reserved. | Photos by
                <a href="http://fotogrph.com/">Fotogrph</a> | Design by
                <a href="http://templated.co" rel="nofollow">TEMPLATED</a>.
                </p>
        </div>
    )
}

export default footer;