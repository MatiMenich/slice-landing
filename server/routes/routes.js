'use strict';

module.exports = function(server) {
  // Defining all the routes
  server.get('/', function(req, res) {
    res.render('views/pages/index', {
      title: 'asd'
    });
  });

  server.get('/restaurant', function(req, res) {
    res.render('views/pages/restaurant');
  });
};