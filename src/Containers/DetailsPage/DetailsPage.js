import React from 'react';
import './DetailsPage.css'
import logoImage from '../../Assets/Images/movielogo.png'
import AUX from '../../HOC/Auxillary'

const detailsPage = (props) => {
    console.log("The props ")
    console.log(props)
    return (

        <div>
            <div className="img-div">
                <img src={"http://image.tmdb.org/t/p/w500" + props.content.poster_path}></img>
            </div>
            <div className="content-div">
                <h1>{props.content.title}</h1>
                <br></br>
                <p> <strong>Overview :</strong>     {props.content.overview}</p>
                <p><strong>Vote Average</strong> : {props.content.vote_average}/10</p>
                <p><strong>Language</strong> : {props.content.original_language}</p>

            </div>

        </div>


    )
}


export default detailsPage; 