import React, { Component } from 'react';
import './App.css';
import Card from './Components/Card/Card'
import Cards from './Containers/Cards/Cards'
import TestNav from './Layout/Navigation/TestNav/TestNav'

import Navigation from './Layout/Navigation/Navigation'

class App extends Component {
  render() {
    return (
      <div >
          {/* <Navigation/> */}
          <TestNav/>
          
          <Cards/>
          
      </div>
    );
  }
}

export default App;
