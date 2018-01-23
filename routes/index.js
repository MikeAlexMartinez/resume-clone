'use strict';

// Third party modules
const express = require('express');
const router = express.Router();

const allRoutes = require('./allRoutes');

allRoutes.forEach(({method, route, fn}) => {

  router[method](route, fn);

});

module.exports = router;