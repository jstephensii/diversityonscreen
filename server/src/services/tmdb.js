/* @flow */
const config = require('../../config');
const axios = require('axios');
const requestify = require('requestify');
const moment = require('moment');
const logger = require('../utils/logger');

// https://api.themoviedb.org/3/movie/popular?api_key={{api_key}}&language=en-US&page=1

module.exports = {
  getPopularCinema: function(){
    let params = {
      api_key: config.tmdb.apiKey,
      language: 'en-US',
      page:1
    };

    return axios.all([
      axios.get(config.tmdb.apiURL + 'movie/popular', {params: params}),
      axios.get(config.tmdb.apiURL + 'tv/popular',{ params: params}),
      axios.get(config.tmdb.configURL, {params: params})
    ])
    .then(axios.spread(function (movieResponse, tvResponse, configResponse) {
      return {
          config: configResponse.data,
          content: {
            movies: movieResponse.data.results,
            tv: tvResponse.data.results
          }
        };
    }))
    .catch(function (error){
      console.log(error);
    });
  }
}
