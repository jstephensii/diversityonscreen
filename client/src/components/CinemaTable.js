// @flow

import * as React from 'react';

type PropsCinemaItem = {
    type: string,
    title: string,
    detailLink: string,
    score: number
};

type PropsCinemaItems = {items: [PropsCinemaItem]};

export class CinemaTable extends React.Component<PropsCinemaItems> {
  render(){
    const rows = [];
    let lastCinemaType = null;
    this.props

    this.props.items.forEach((cinemaItem) => {
      if (cinemaItem.type !== lastCinemaType) {
        rows.push(
          <CinemaCategoryRow
            cinemaType= {cinemaItem.type}
            key= {cinemaItem.type}/>
        );
      }
      rows.push(
        <CinemaRow
          cinemaItem= {cinemaItem}
          key= {cinemaItem.detailLink} />
      );
      lastCinemaType = cinemaItem.type
    });

    return(
      <table align="center">
        <thead>
          <tr>
            <th>Title</th>
            <th>Diversity Score</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  };// END render
};  // END CLASS - CinemaTable

class CinemaCategoryRow extends React.Component<{cinemaType: string}>{
  render(){
    const cinemaType = this.props.cinemaType;
    return (
      <tr>
        <th colSpan="2">{cinemaType}</th>
      </tr>
    );
  }; // END render
}; // END CLASS - CinemaCategoryRow

// {type: 'Movies', title: 'Harlem Nights', detailLink: 'https://www.themoviedb.org/movie/9085-harlem-nights', score: 8.0},


class CinemaRow extends React.Component<{cinemaItem: PropsCinemaItem}>{
  render(){
    return (
      <tr>
        <td><a href={this.props.cinemaItem.detailLink}>{this.props.cinemaItem.title}</a></td>
        <td>{this.props.cinemaItem.score}</td>
      </tr>
    );
  }; // END render
}; // END CLASS - CinemaRow
