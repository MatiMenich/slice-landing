'use strict';
var request = require('request');

module.exports = function(server) {
    // Create Express API's here
    
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