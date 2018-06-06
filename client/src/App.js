// @flow

import * as React from 'react';
import logo from './logo.svg';
import logoTMDB from './assets/tmdb_logo.svg';
import './App.css';

import {CinemaTable} from './components/CinemaTable.js';
import {SearchBar} from './components/SearchBar.js';
import text from './assets/text.json';

type Props = {};

type State = {
  searchText: string,
};

class App extends React.Component<Props, State>{
  state = {
    searchText: '',
   };

  handleSearchTextChange = (event: SyntheticEvent<HTMLInputElement>) => {
    //(event.currentTarget: HTMLInputElement);

    this.setState(prevState => ({
      searchText: prevState.searchText,
    }));
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo2" alt="logo" />
          <h1 className="App-title">{text.appTitle}</h1>
          {text.appTagline}
        </header>
        <SearchBar text={this.state.searchText} handleTextChange={this.handleSearchTextChange} />
        <CinemaTable/>
        <img src={logoTMDB} className="App-logo2" alt="TMDB Logo" />
      </div>
    );
  }; // END render
}; // END CLASS - APP

// function searchCinema(){
//   //TODO: Implement
// };
// function getPopularCinema(){
//   //TODO: Implement
// };

export default App;
