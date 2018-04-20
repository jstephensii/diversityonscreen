# Diversity on Screen

Tracking diversity in the media.  From movies to television shows with the intent of delivering multiple cross-platform tools.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

Server: you'll need to setup NodeJS on GoogleAppengine.

```
[NodeJS on GoogleAppengine]https://cloud.google.com/nodejs/docs/setup
> Make sure to install [YARN]https://yarnpkg.com/en/docs/install
```

Client: React + ES6 setup with [create-react-app](https://github.com/facebook/create-react-app)


### Installing
#### Server
1. Setup [NodeJS on GoogleAppengine](https://cloud.google.com/nodejs/docs/setup) development environment.
    Make sure to install [YARN](https://yarnpkg.com/en/docs/install)
2. Clone [repo](https://console.cloud.google.com/code/develop/browse/diversity-on-screen?project=diversity-on-screen)
3. Get dependencies
    yarn install
4. Start server
  yarn start
#### Client
1. Install dependencies for the Client
```
  cd /client && yarn install.
```
2. Start webpack-dev-server
```
  yarn start
```
  * API calls directed to webpack-dev-server are redirected to dev-server(above) at port :3000.
3. Site should be live at [Localhost](http://localhost:3001/)
    
## Running the tests

Explain how to run the automated tests for this system

### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

### And coding style tests

Explain what these tests test and why

```
Give an example
```

## Deployment

1. Use gcloud to deploy.
    gcloud app deploy

## Built With

* [The Movie DB](https://www.themoviedb.org)
* [NodeJS](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
* [React](https://maven.apache.org/) - Dependency Management
* [Google AppEngine](https://rometools.github.io/rome/) - Used to generate RSS Feeds
* [create-react-app](https://github.com/facebook/create-react-app)

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags).

## Authors

* **James Stephens II** - *Initial work* - [jstephensii](https://github.com/jstephensii)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone who's code was used
* Inspiration
* etc
