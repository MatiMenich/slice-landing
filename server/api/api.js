'use strict';

module.exports = function(server) {
    // Create Express API's here
    
    server.post('/submit_form', function (req, res) {
        var body = req.body;
        console.log(body);

        res.status(200).json({
            code: 200,
            message: 'success'
        });
    });
    
};