//my own middleware

//common JS specification
module.exports = function(request, response, next){
  var start = +new Date();
  var stream = process.stdout;
  var url = request.url;
  var method = request.method;

  //middleware runs sequentially
  //listen to events
  response.on('finish', function(){
    var duration = +new Date() - start;
    var message = method + ' to '+url+ '\ntook '
      +duration + ' ms \n\n';
    stream.write(message);
  });

  next();
};
