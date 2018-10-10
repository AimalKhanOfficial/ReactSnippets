import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Donut from './Donut';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Donut matched="50" unmatched="50" />        
      </div>
    );
  }
}

export default App;
