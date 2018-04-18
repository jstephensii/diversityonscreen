import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import {CinemaTable} from './components/CinemaTable.jsx';
import {SearchBar} from './components/SearchBar.jsx';
import text from './assets/text.json';

class App extends Component{
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo2" alt="logo" />
          <h1 className="App-title">{text.appTitle}</h1>
          {text.appTagline}
        </header>
        <SearchBar />
        <CinemaTable cinemaItems={this.props.cinemaItems} />
      </div>
    );
  }; // END render
}; // END CLASS - APP

export default App;
