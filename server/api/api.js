'use strict';
var request = require('request'),
    gplay = require('google-play-scraper');

module.exports = function(server) {
    // Create Express API's here

    server.get('/app_reviews', function (req, res) {

      var reviews = [];

      gplay.reviews({
        appId: 'com.slice.payments',
        page: 0,
        lang: 'es',
        sort: gplay.sort.RATING
      }).then(function(response){
        response.forEach(function (review){
          if(review.score === 5){
            review.text = review.text.replace('  Opinión completa','');
            reviews.push(review);
          }
        });
        
        gplay.reviews({
          appId: 'com.slice.payments',
          page: 0,
          lang: 'en',
          sort: gplay.sort.RATING
        }).then(function(response){
          response.forEach(function (review){
            if(review.score === 5){
              reviews.push(review);
            }
          });
          
          res.status(200).json({
            code: 200,
            reviews: reviews
          });

        }).catch(function(error){
          console.log('There was an error fetching the reviews!', error);
        });

      }).catch(function(error){
        console.log('There was an error fetching the reviews!', error);
      });
    });
    
    server.post('/submit_form', function (req, res) {

      var body = req.body;
      // console.log(body);

      var options = {
        uri: 'https://hooks.slack.com/services/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',
        method: 'POST',
        json: {
            'username': 'Landing bot',
            'icon_emoji': ':scream:',
            'text': 'Hola a todos! Tenemos un nuevo contacto comercial. :1313:',
            'attachments': [
                {
                  'title': body.contact_name + ' @ ' + body.name,
                  'text': 'Dirección: <http://maps.apple.com/?q='+ body.address +'|'+ body.address +'>\nEmail: <mailto:'+ body.email +'|'+ body.email+ '>\nTeléfono: <tel:'+ body.phone +'|'+ body.phone +'>',
                  'mrkdwn_in': ['text']
                }
            ]
        }
      };

      request(options, function (error, response, body) {
        if (!error && response.statusCode === 200) {
          res.status(200).json({
            code: 200,
            message: 'success'
          });
        }
        else {
          res.status(422).json({
              code: 422,
              error: error
          });
        }
      });

      
    });
    
};