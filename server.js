const express = require('express');
const Datastore = require('@google-cloud/datastore');
const bodyParser = require('body-parser');
const path = require ('path');
const logger = require('morgan');

const projectId = 'diversity-on-screen';
const datastore = new Datastore({
  projectId: projectId
})

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended: true}));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

//app.get('/api/*', function(req, res) {
//    res.send('Hello World');
//});

app.get('/', (req, res) => {
    res.send('Call for server page: Hello World');
    //res.sendFile(path.resolve(__dirname, 'client/build', 'index.html'));
});

require('./routes')(app, {});
app.listen(PORT, () =>{
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});
