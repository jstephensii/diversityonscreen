// @flow

import * as React from 'react';

type Props = {
  text: string,
  handleTextChange: (event: SyntheticEvent<HTMLInputElement>) => void;
};

export class SearchBar extends React.Component<Props>{
  render(){
    //const searchText = this.props.text;
    return (
      <form>
        <input type="text" placeholder="Search..." value={this.props.text} onChange={this.props.handleTextChange}/>
      </form>
    );
  };
}; // END CLASS - SearchBar
