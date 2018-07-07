const config = require('./config');

/* Modules */
const express = require('express');
const logger = require('morgan');
const path = require('path');
const fs = require('fs');
const chalk = require('chalk');
const errorHandler = require('errorhandler');
const bodyParser = require('body-parser');
const favicon = require('serve-favicon');
const cors = require('cors');

/* Routes */
const index = require('./routes/index');
const users = require('./routes/users');

const app = express();

/*
  Express Configuration
*/
const logDate = new Date()
app.set('host', config.app.host)
app.set('port', config.app.port)
app.set('env', config.app.env)
// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');


/*
  Registering Middleware
*/
app.use(bodyParser.json());
app.use(logger('common', {
  stream: fs.createWriteStream('./log/log_' + logDate.getDate() + '-' + logDate.getMonth() + 1 + '-' + logDate.getFullYear() + '.log', {flags: 'a'})
}));
app.use(logger('dev'));
app.use(bodyParser.json());
// enabling cors
// app.use(cors({
//   origin: 'http://localhost:8080',
//   optionsSuccessStatus: 200         // some legacy browsers (IE11, various SmartTVs) choke on 204 
// }))
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
// app.use(express.static(path.join(__dirname, 'public')));

/*
  Loading Route Middleware
*/
app.use('/', index)
app.use('/users', users)

/*
  Error Handler for development
*/
if (app.get('env') === 'development') {
  app.use(errorHandler());
}

/*
  Start to listen for the Express server
*/
app.listen(config.app.port, () => {
  console.log('App is running at http://localhost:%d in %s environment', app.get('port'), app.get('env'));
  console.log('Press CTRL-C to stop\n');
})

module.exports = app