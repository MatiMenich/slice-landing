'use strict';

var serveStatic = require('serve-static');
var server = require('./server/server')();

server.set('views', './dist');
server.use(serveStatic('dist'));

server.use(function(req, res, next) {
  res.status(404);
  
  if (req.accepts('html')) {
    res.render('views/errors/404', { url: req.url });
    return;
  }

  // respond with json
  if (req.accepts('json')) {
    res.send({ error: 'Not found' });
    return;
  }

  // default to plain-text. send()
  res.type('txt').send('Not found');
});

server.listen(server.get('port'), function () {
    console.log('✔ Express server listening connected listening on: ' + server.get('port'));
});