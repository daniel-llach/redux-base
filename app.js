'use strict';
// API dependencies
const express = require('express');
const bodyParser = require('body-parser');
const url = require('url'); // req.body
const colors = require('colors');

// front dependencies
const path = require('path')
const favicon = require('serve-favicon')
const logger = require('morgan')
// const cookieParser = require('cookie-parser')

/////////
// API //
/////////

// create express app
const app = express();
app.use( (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, username, password");
  next();
})//app.use
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}))//app.use
// Start listening
const server = app.listen(8080, "localhost", () => {
	console.log('artOpening account listening on localhost:8080'.green);
})//server

///////////
// FRONT //
///////////

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hjs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(require('morgan')('combined'));
app.use(require('body-parser').urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  let user = req.user;
  res.render('home', { title: 'MERN Redux Base'});
});

module.exports = app;
