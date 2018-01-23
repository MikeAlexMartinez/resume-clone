'use strict';

// Application data
const appData = require('../scripts/appData');

const routes = [
  {
    method: 'get',
    route: '/',
    fn: function homePage(req, res) {
      res.render('my-projects/resume-clone/home', {title: 'Resume', data: appData.data });
    }
  },
];

module.exports = routes; 