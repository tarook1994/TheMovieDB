import React, { Component } from 'react';
import './App.css';
import Card from './Components/Card/Card'
import Cards from './Containers/Cards/Cards'
import TestNav from './Layout/Navigation/TestNav/TestNav'
import Footer from './Layout/Footer/Footer'
import { BrowserRouter } from 'react-router-dom';
import Axios from 'axios'


import Navigation from './Layout/Navigation/Navigation'

const API_KEY = 'e6f375a40042abd253b3b3601cf0f895';


class App extends Component {

  state = {
    movies: null,
    moviesLoaded: false,
    loadedPage: 'upcoming',
    finishedRequest: false
  }

  componentDidMount() {
    this.fetchData();

  }

  fetchData = () => {
    Axios.get('https://api.themoviedb.org/3/movie/' + this.state.loadedPage + '?api_key=' +
      API_KEY + '&language=en-US&page=1').then(response => {
        console.log(response)
        this.setState({
          movies: response.data.results,
          moviesLoaded: true,
          finishedRequest: true
        })
      })

  }


  navButtonListener = (page) => {
    this.setState({
      loadedPage: page,
      finishedRequest: false,
      moviesLoaded: false
    })
  }

  render() {
    if (!this.state.finishedRequest) {
      this.fetchData();
    }

    return (
      <BrowserRouter>
        <div >
          {/* <Navigation/> */}
          <TestNav click={this.navButtonListener} />

          {
            this.state.movies ? <Cards
              movies={this.state.movies}
              moviesLoaded={this.state.moviesLoaded} /> : <h1>Loading</h1>
          }



          <Footer />

        </div>
      </BrowserRouter>

    );
  }
}

export default App;
