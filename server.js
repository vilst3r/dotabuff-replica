/* Configuration */
import { app, api } from './config';

/* Modules */
import { dotaWebAPI } from 'dota2_web_api';
import express from 'express';
import morgan from 'morgan';
import path from 'path';
import fs from 'fs';
import chalk from 'chalk';
import errorHandler from 'errorhandler';
import bodyParser from 'body-parser';
import favicon from 'serve-favicon';
import cors from 'cors';
import { format } from 'util';

/* Routes */
import index from './routes/index';
import heroes from './routes/heroes';

const server = express()

/**
 * Express configuration
 */
const logDate = new Date()
server.set('host', app.host)
server.set('port', app.port)
server.set('env', app.env)
server.set('api', new dotaWebAPI(api.key))

/* view engine setup */
server.set('views', path.join(__dirname, 'views'));
server.set('view engine', 'jade');

/**
 * Registering Middleware
 */
server.use(bodyParser.json());
server.use(morgan('common', {
  stream: fs.createWriteStream(format('./log/%d-%d-%d.log', logDate.getDate(), logDate.getMonth() + 1, logDate.getFullYear()), {
    flags: 'a'
  })
}));
server.use(morgan('dev'));
server.use(bodyParser.json());

// enabling cors
server.use(cors({
  origin: 'http://localhost:8080',
  optionsSuccessStatus: 200         // some legacy browsers (IE11, various SmartTVs) choke on 204 
}))
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
// app.use(express.static(path.join(__dirname, 'public')));

/**
 * Loading Route Middleware
 */
server.use('/', index)
server.use('/heroes', heroes)

/**
 * Error Handler for development 
 */
if (app.env === 'development') {
  server.use(errorHandler());
}


/**
 * Start to listen for the Express server
 */
server.listen(app.port, () => {
  console.log('App is running at http://localhost:%d in %s environment', app.port, app.env);
  console.log('Press CTRL-C to stop\n');
})

module.exports = server