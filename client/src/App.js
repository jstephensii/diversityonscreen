import React, {Component} from 'react';
import logo from './logo.svg';
import logoTMDB from './assets/tmdb_logo';
import './App.css';

import {CinemaTable} from './components/CinemaTable.jsx';
import {SearchBar} from './components/SearchBar.jsx';
import text from './assets/text.json';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      searchText: ''
    };
    handleSearchTextChange = this.handleSearchTextChange.bind();
  };

  handleSearchTextChange(searchText){
    this.setState({
      searchText: searchText
    });
    searchCinema();
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo2" alt="logo" />
          <h1 className="App-title">{text.appTitle}</h1>
          {text.appTagline}
        </header>
        <SearchBar searchText={this.state.searchText} onSubmit={this.handleSearchTextChange} />
        <CinemaTable cinemaItems={this.props.cinemaItems} />
        <img src={logoTMDB} className="App-logo2" alt="TMDB Logo" />
      </div>
    );
  }; // END render
}; // END CLASS - APP

searchCinema(){
  //TODO: Implement
};
getPopularCinema(){
  //TODO: Implement
};

export default App;
