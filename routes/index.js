'use strict';

// Third party modules
const express = require('express');
const router = express.Router();

// Application data
const appData = require('../scripts/appData');

// home route
router.get('/', function homePage(req, res) {

  res.render('projects/resume-clone/home', {title: "Resume", data: appData.data });
});

module.exports = router;