// @flow

// All server configuration variables.
// Usernames, passwords, and keys should be stored as an environment variable.
// .env is available for development

var config = {};

config.web = {};
config.web.port = process.env.PORT || '3000';

config.tmdb = {};
config.tmdb.apiURL = 'https://api.themoviedb.org/3/';
config.tmdb.apiKey = process.env.TMDB_API_KEY || 'apikey';

config.gcloud = {};
config.gcloud.project_id = 'diversity-on-screen';
config.gcloud.app_creds = 'Diversity-on-Screen-d887a834a715.json';

config.tests = {};
config.tests.coverage_base_url = '../dist/routes/index.js';
config.tests.base_url = 'http://localhost:3000';

module.exports = config;
