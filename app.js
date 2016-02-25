var express = require('express');
var app = express();

var logger = require('./logger');
app.use(logger); //use this middleware

//the express methods, create routes
//the get method creates a route that accepts
//http requests

app.use(express.static('public'));

// '/'=root path
// app.get('/', function(request, response){
//   response.sendFile(__dirname + '/public/index.html');
// });

app.get('/blocks', function(request,response){
  var blocks = ['holi', 'Movable', 'Rotating'];
  //response.send(blocks); //sends to JSON
  response.json(blocks); //same as above
});

app.get('/html', function(request,response){
  var blocks = '<ul><li>Fixed</li><li>Movable</li></ul>';
  response.send(blocks); //sends as text/html
});
//this is not typical, EJS would be better for html text

app.get('/new', function(request,response){
  response.redirect(301, '/blocks'); //permanently redirect
  //status code 301
});
//if somebody requests for new, they'll go to blocks


app.listen(3000, function(){
  console.log('Listening on port 3000');
});

//req and res are objects from node HTTP
//inheritance...call node functions from express apps

/* other functions:
    post
    put
    patch
    delete
*/
