var express = require('express');
var request = require('request');
var app = express();
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    request('http://localhost:3008/applications', function(error, response, body) {
        let applications = JSON.parse(body);
        res.render('General_Points', { title: 'General Points', applications });
    });
});


module.exports = router;