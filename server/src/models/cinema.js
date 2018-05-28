/* @flow */
const gstore = require('gstore-node')();
const { Schema } = gstore;

import typeof {Datastore} from '@google-cloud/datastore';
const tmdb = require('../services/tmdb');

const cinemaSchema = new Schema({
  title: {type: String, required: true},
  tdmb_details: {
    id: {type: Number, required: true},
    title: {type: String, required: true},
    poster_path: {type: String},
    backdrop_path: {type: String},
    overview: {type: String},
    release_date: {type: Date}
  },
  diversityScore: {type: Number},
  diversity: {
    race: {
      homogeneity: {type: Number},
      progressiveness: {type: Number}
    },
    gender: {
      homogeneity: {type: Number},
      progressiveness: {type: Number}
    },
    ethnicity: {
      homogeneity: {type: Number},
      progressiveness: {type: Number}
    },
    nationality: {
      homogeneity: {type: Number},
      progressiveness: {type: Number}
    },
    age: {
      homogeneity: {type: Number},
      progressiveness: {type: Number}
    }
  }
});

const popularCinemaSchema = new Schema({
  type: {type: String, default: "Popular"},
  modifiedOn: {type: Date},
  cinema: {type: Object, required: true}
});

module.exports = {
  Cinema: gstore.model('Cinema', cinemaSchema),
  PopularCinema: gstore.model('PopularCinema', popularCinemaSchema)
};
