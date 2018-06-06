// @flow

import * as React from 'react';

type cinemaType = {
      vote_count: number,
      id: number,
      vote_average: number,
      title?: string,
      popularity: number,
      poster_path: string,
      backdrop_path: string,
      overview: string,
      name?: string,
      diversity_score: ?number
}

type tmdbConfigType = {
  images: {
    base_url: string,
    secure_base_url: string,
    backdrop_sizes: [string],
    logo_sizes: [string],
    poster_sizes: [string],
    profile_sizes: [string],
    still_sizes: [string]
  },
  change_keys: [string]
}

type State = {
  cinema: {
    content: {
      movies: cinemaType[],
      tv: cinemaType[]
    },
    config: tmdbConfigType
  }
}

const tmdb_api_root = 'https://www.themoviedb.org';
const dos_api_root = '/api/cinema';

export class CinemaTable extends React.Component<{}, State> {
  image_config = {
    images: {
      base_url: "",
      poster_sizes: [""]
    }
  };

  constructor(){
    super();

    this.state = {
      cinema:{
        content: {
          movies: [],
          tv: []
        },
        config: {
          images: {
            base_url: "",
            secure_base_url: "",
            backdrop_sizes: [""],
            logo_sizes: [""],
            poster_sizes: [""],
            profile_sizes: [""],
            still_sizes: [""]
          },
          change_keys: [""]
        }
      }
    }
  }



  componentDidMount(){
    this.callApi(dos_api_root)
    .then(res => {
      this.setState({cinema: res });
    })
    .catch(err => console.log(err));
  }

  callApi = async (url: string) => {
    const response = await fetch(url);
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render(){
    const rows = [];
    let lastCategoryType = null;

    Object.keys(this.state.cinema.content).forEach((category) => {
      if (category !== lastCategoryType) {
        rows.push(
          <CinemaCategoryRow
            category= {category}
            key= {category}/>
        );
      }
      this.state.cinema.content[category].forEach((item) => {
        rows.push(
          <CinemaRow
            category= {category}
            cinemaItem= {item}
            imageBaseUrl= {this.state.cinema.config.images.base_url + this.state.cinema.config.images.poster_sizes[0] + '/'}
            key= {item.id} />
        );
      });

      lastCategoryType = category;
    });

    return(
      <table align="center">
        <thead>
          <tr>
            <th></th>
            <th>Title</th>
            <th>Diversity Score</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  };// END render
};  // END CLASS - CinemaTable

class CinemaCategoryRow extends React.Component<{category: string}>{
  render(){
    return (
      <tr>
        <th colSpan="3">{this.props.category}</th>
      </tr>
    );
  }; // END render
}; // END CLASS - CinemaCategoryRow

class CinemaRow extends React.Component<{category: string, cinemaItem: cinemaType, imageBaseUrl: string}>{
  render(){
    const item_img_link = this.props.imageBaseUrl + this.props.cinemaItem.poster_path;
    const item_detail_link = tmdb_api_root + '/' + this.props.category + '/' + this.props.cinemaItem.id;
    const title = this.props.cinemaItem.title || this.props.cinemaItem.name;
    return (
      <tr>
        <td><a href={item_detail_link}><img src={item_img_link} alt={title}/></a></td>
        <td><a href={item_detail_link}>{title}</a></td>
        <td>{this.props.cinemaItem.diversity_score}</td>
      </tr>
    );
  }; // END render
}; // END CLASS - CinemaRow
