import { datastore } from "google-proto-files";
import url from 'url';

import Datastore from '@google-cloud/datastore';

const CINEMA = [
  {
    type: "Movies",
    title: "Harlem Nights",
    detailLink: "https://www.themoviedb.org/movie/9085-harlem-nights",
    score: 8.0
  },
  {
    type: "Movies",
    title: "Remember the Titans",
    detailLink: "https://www.themoviedb.org/movie/10637-remember-the-titans",
    score: 7.0
  },
  {
    type: "Movies",
    title: "Black Panther",
    detailLink: "https://www.themoviedb.org/movie/284054-black-panther",
    score: 9.0
  },
  {
    type: "TV",
    title: "'black-ish",
    detailLink: "https://www.themoviedb.org/tv/61381-black-ish",
    score: 8.0
  },
  {
    type: "TV",
    title: "Burn Notice",
    detailLink: "https://www.themoviedb.org/tv/2919-burn-notice",
    score: 1.0
  },
  {
    type: "TV",
    title: "This Is Us",
    detailLink: "https://www.themoviedb.org/tv/67136-this-is-us",
    score: 7.0
  }
];

module.exports = class Cinema {
  constructor(tmdb_cinema, datastore){
    this.detail = {};
  }

  makeCinemaMovie(tmdbObject){
    return {
      title: tmdbObject.title,
      idTMDB: tmdbObject.id,
      type: "movie",
      url: "",
      diversityScore: 0,
      diversity: {
        race: {
          homogeneity: 0,
          progressiveness: 0
        },
        gender: {
          homogeneity: 0,
          progressiveness: 0
        },
        ethnicity: {
          homogeneity: 0,
          progressiveness: 0
        },
        nationality: {
          homogeneity: 0,
          progressiveness: 0
        },
        age: {
          homogeneity: 0,
          progressiveness: 0
        }
      }
    };
  }

  insertCinema(cinema){
    datastore.save({
      key: datastore.key(cinema.idTMDB),
      data: cinema
    });
  }
};
