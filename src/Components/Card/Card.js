import React from 'react';
import './Card.css'

const card = (props) => {

  return (
    <div className="card">
      <img className="bg-img" src={'http://image.tmdb.org/t/p/w500' + props.data.poster_path}></img>
      <div className="content">
        <h4>{props.data.title}</h4>
        <p>{props.data.overview}</p>
        <div>
          <button>More Detials</button>
          <button>Favorite</button>
        </div>

      </div>
    </div>

  )
}

export default card;    