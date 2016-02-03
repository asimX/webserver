/**
 * Created by asiddiqui on 2/2/16.
 */

var express = require('express');
var app = express();
var PORT = 3000;

var middleware = require('./middleware.js');

app.use(middleware.logger);

app.get('/about', middleware.requireAuthentication, function(req,res){
    res.send('about us');
});

app.use(express.static(__dirname + '/public'));

//app.get('/public')

app.listen(PORT, function(){
    console.log('Express server started at '+ PORT);
});