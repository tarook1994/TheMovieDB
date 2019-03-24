import React, { Component } from 'react';
import './App.css';
import Card from './Components/Card/Card'
import Cards from './Containers/Cards/Cards'
import TestNav from './Layout/Navigation/TestNav/TestNav'
import Footer from './Layout/Footer/Footer'
import { BrowserRouter } from 'react-router-dom';

import Navigation from './Layout/Navigation/Navigation'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div >
          {/* <Navigation/> */}
          <TestNav />

          <Cards />

          <Footer />

        </div>
      </BrowserRouter>

    );
  }
}

export default App;
