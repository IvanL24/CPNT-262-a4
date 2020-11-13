// dependencies
const path = require('path');
const express = require('express');
const ejs = require('ejs');

// require gallery module
const japan = require('./japan');

//create express app
const app = express();

// view engine
app.set('view engine', 'ejs');

// middleware
app.use(express.static(path.join(__dirname, 'public')));

// homepage render
app.get('/', function(request, response){
  response.render('pages/index.ejs',{title: 'please'})
});


// gallery page render
app.get('/gallery', function(request, response){
  response.render('pages/gallery',{title: 'gallery'})
});

// subscribe page render
app.get('/subscribe', function(request, response){
  response.render('pages/subscribe',{title: 'subscribe'})
});

// json endpoint for gallery
app.get('/api/v0/gallery', function(request,response){
  response.json(japan);
});

// middleware
app.use(function(req, res) {
  res.status(404);
  res.send('404: File Not Found');
});

// set port preference
const PORT = process.env.PORT || 8080;

// start server
app.listen(PORT, function(){
  console.log(`Listening on port ${PORT}`);
});