import React, { Component } from 'react';
import Card from '../../Components/Card/Card'
import AUX from '../../HOC/Auxillary'
import './Cards.css'


class Cards extends Component {




    render() {
        let card = <h1>Loading</h1>
        if (this.props.moviesLoaded) {
            card = this.props.movies.map((movie, index) => {
                return (
                    <Card
                        key={movie.id}
                        data={movie}
                        index={index}
                        click={this.props.click} />
                )

            })

        }

        return (

            <div id="grid"
            className='grid-container'>
                {card}
            </div>


        )
    }
}
export default Cards;