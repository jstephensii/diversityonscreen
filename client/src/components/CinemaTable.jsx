import React, {Component} from 'react';

export class CinemaTable extends Component {
  render(){
    const rows = [];
    let lastCinemaType = null;

    this.props.cinemaItems.forEach((cinemaItem) => {
      if (cinemaItem.type !== lastCinemaType) {
        rows.push(
          <CinemaCategoryRow
            type= {cinemaItem.type}
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

class CinemaCategoryRow extends Component{
  render(){
    const cinemaType = this.props.type;
    return (
      <tr>
        <th colSpan="2">{cinemaType}</th>
      </tr>
    );
  }; // END render
}; // END CLASS - CinemaCategoryRow


class CinemaRow extends Component{
  render(){
    const cinemaItem = this.props.cinemaItem;
    return (
      <tr>
        <td><a href={cinemaItem.detailLink}>{cinemaItem.title}</a></td>
        <td>{cinemaItem.score}</td>
      </tr>
    );
  }; // END render
}; // END CLASS - CinemaRow
