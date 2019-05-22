import React, { Component } from 'react';
import './App.css';
import Card from './Components/Card/Card'
import Cards from './Containers/Cards/Cards'
import TestNav from './Layout/Navigation/TestNav/TestNav'
import Footer from './Layout/Footer/Footer'
import { BrowserRouter } from 'react-router-dom';
import Axios from 'axios'
import DetailsPage from './Containers/DetailsPage/DetailsPage'
import AboutPopUp from './Components/AboutPopUp/AboutPopUp'


import Navigation from './Layout/Navigation/Navigation'

const API_KEY = 'e6f375a40042abd253b3b3601cf0f895';


class App extends Component {

  state = {
    movies: null,
    moviesLoaded: false,
    loadedPage: 'upcoming',
    finishedRequest: false,
    current: 'main'
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
      moviesLoaded: false,
      current: 'main'
    })

  }

  cardClickHander = (id) => {
    console.log(id)
    this.setState({
      current: 'detail',
      detailID: id
    })
  }

  render() {
    if (!this.state.finishedRequest) {
      this.fetchData();
    }

    let displayedPage = null;
    if (this.state.current === 'main') {
      if (this.state.movies) {
        displayedPage = <Cards
          movies={this.state.movies}
          moviesLoaded={this.state.moviesLoaded}
          click={this.cardClickHander} />
      } else {
        displayedPage = <h1>Loading</h1>;
      }
    } else if (this.state.current === 'detail') {
      displayedPage = <DetailsPage
        content={this.state.movies[this.state.detailID]} />
      console.log(this.state.movies[this.state.detailID])
    }

    const data = {
      name: 'Ahmed Tarek',
      bio: 'I am a 25 year old  Engineer. I am currently working as a Technical Support Engineer at Dell EMC. I have a 4 years experience in programming using Java. Programming is one of my biggest motivations. I believe that programming is a kind of a super power that makes significant changes to the world. Therefore, developers have a huge role in making people’s life easier.',
      github : 'https://github.com/tarook1994',
      email : 'Ahmed-tarek94@hotmail.com'
    }
    const about = this.state.loadedPage === 'aboutus' ? <AboutPopUp
      data = {data} /> : null


    return (
      <BrowserRouter>
        <div>
          {/* <Navigation/> */}
          <TestNav click={this.navButtonListener} />
          {
            about
          }

          {

            displayedPage
          }

          <Footer />

        </div>
      </BrowserRouter>

    );
  }
}

export default App;
