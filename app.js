'use strict'

// Core node modules
const path = require('path');

// Third party libs
const express = require('express');

// Load my routes
const routes = require('./routes');

// initiate express app
const app = express();

// tell express where templates are kept.
app.set('views', './views');
// set template engine to pug
app.set('view engine', 'pug');

// This is where static files are served from
app.use(express.static(path.resolve(__dirname, 'public')));

// my routes
app.use(routes);

app.listen(3000, () => console.log('App listening on port 3000!'));