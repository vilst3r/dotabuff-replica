/* Configuration */
import { app, api } from './config';

/* Modules */
import { dotaWebAPI } from 'dota2_web_api';
import express from 'express';
import morgan from 'morgan';
import fs from 'fs';
import errorHandler from 'errorhandler';
import bodyParser from 'body-parser';
import { format } from 'util';

/* Routes */
import index from './controllers/indexController';
import heroes from './controllers/heroController';

/**
 * Express configuration
 */
const server = express()
server.set('host', app.host)
server.set('port', app.port)
server.set('env', app.env)
server.locals.api = new dotaWebAPI(api.key) 

/**
 * Registering Middleware
 */
const logDate = new Date()
server.use(morgan('common', {
  stream: fs.createWriteStream(format('./log/%d-%d-%d.log', logDate.getDate(), logDate.getMonth() + 1, logDate.getFullYear()), {
    flags: 'a'
  })
}));
server.use(morgan('dev'));
server.use(bodyParser.json());

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