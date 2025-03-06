var express = require('express');
var app = express();

app.get('/', function (req, res) {
   res.send("Hello world! by express");
});

app.get('/test', function (req, res) {
   res.send("this is route 2");
});

app.get('/test', function (req, res) {
   res.send("this is route 2");
   var http = require('http');
   var knockknock = require('knock-knock-jokes');
   http.createServer(function (req, res) {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      var randomJoke = knockknock()
      res.end(randomJoke);
   })
});
app.listen(8080); 