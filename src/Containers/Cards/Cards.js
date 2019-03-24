import React, { Component } from 'react';
import Axios from 'axios'
import Card from '../../Components/Card/Card'
import TitlebarGridList from '../../Components/TitlebarGridList/TitlebarGridList';
import AUX from '../../HOC/Auxillary'
import './Cards.css'

const API_KEY = 'e6f375a40042abd253b3b3601cf0f895';

class Cards extends Component {
    state = {
        movies: null,
        moviesLoaded: false
    }

    componentDidMount() {
        Axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=' + API_KEY + '&language=en-US&page=1').then(response => {
            console.log(response)
            this.setState({
                movies: response.data.results,
                moviesLoaded: true
            })
        })

    }

    render() {
        let card = <h1>Loading</h1>
        if (this.state.moviesLoaded) {
             card = this.state.movies.map((movie, index) => {
                return (
                    <Card
                        key={movie.id}
                        data={movie} />
                )

            })

        }

        return (

            <div className='grid-container'>
                {card}
            </div>


        )
    }
}
export default Cards;