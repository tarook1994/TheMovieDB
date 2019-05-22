import React from 'react';
import './Card.css'

const card = (props) => {

  return (
  
    <div class="hvrbox" onClick={() => props.click(props.index)}>
      <img src={'http://image.tmdb.org/t/p/w500' + props.data.poster_path} alt="Mountains" class="hvrbox-layer_bottom" />
      <div class="hvrbox-layer_top">
        <div class="hvrbox-text">{props.data.overview}</div>
      </div>
    </div>

  )
}

export default card;    