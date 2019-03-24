import React from 'react';
import './Card.css'

const card = (props) => {
    return (
        <div className="demo-card-image mdl-card mdl-shadow--2dp">
            <div className="demo-card-image mdl-card mdl-shadow--2dp">
            <img src={'http://image.tmdb.org/t/p/w185'+props.img}></img>
                <div className="mdl-card__title mdl-card--expand"></div>
                <div className="mdl-card__actions">
                    <span className="demo-card-image__filename">{props.name}</span>
                </div>
            </div>
        </div>

    )
}

export default card;    