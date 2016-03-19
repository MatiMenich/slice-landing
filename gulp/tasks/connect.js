'use strict';

var gulp = require('gulp');
var connectLiveReload = require('connect-livereload');
var serveStatic = require('serve-static');
var server = require('../../server/server')();

gulp.task('connect', ['styles', 'fonts'], function() {
    server.set('views', './app');

    server.use(connectLiveReload())
        .use(serveStatic('.tmp'))
        .use(serveStatic('app', {
            'index': ['index.html'],
        }))
        // paths to bower_components should be relative to the current file
        // e.g. in app/index.html you should use ../bower_components
        .use('/bower_components', serveStatic('bower_components'));

    server.listen(server.get('port'), function () {
        console.log('✔ Express server listening connected listening on: ' + server.get('port'));
    });
});

gulp.task('connect:dist', ['build'], function() {
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
});