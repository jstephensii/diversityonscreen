import React, {Component} from 'react';

export class SearchBar extends Component{
  constructor(props){
    super(props);
    this
  }

  handleTextChange(e){
    this.props.onSubmit(e.target.value);
  }

  render(){
    const searchText = this.props.searchText;
    return (
      <form>
        <input type="text" placeholder="Search..." value={searchText} onChange={this.handleTextChange}/>
      </form>
    );
  };
}; // END CLASS - SearchBar
