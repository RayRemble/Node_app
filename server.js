// var http = require('http');
// var fs = require('fs');
// var url = require('url');


// http.createServer( function (request, response) {  
 
//    var pathname = url.parse(request.url).pathname;
   
   
//    console.log("Request for " + pathname + " received.");
   
   
//    if(pathname=="/"){
//        pathname = "/index.html";
//    }
   
  
//    fs.readFile(pathname.substr(1), function (err, data) {
//       if (err) {
//          console.log(err);
         
//          response.writeHead(404, {'Content-Type': 'text/html'});
//       }else{	
        
//          response.writeHead(200, {'Content-Type': 'text/html'});	
         
         
//          response.write(data.toString());		
//       }
      
//       response.end();
//    });   
// }).listen(8081);


// console.log('Server running at http://127.0.0.1:8081/');

// var express = require('express');
// var app = express();
// var router = require('./router/main')(app);

// app.set('views', __dirname + '/views');
// app.set('view engine', 'ejs');
// app.engine('html', require('ejs').renderFile);

// var server = app.listen(3000, function(){
//     console.log("Express server has started on port 3000")
// });

// app.use(express.static('public'));


var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');
var fs = require("fs")

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);


var server = app.listen(3000, function(){
 console.log("Express server has started on port 3000")
});

app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(session({
 secret: '@#@$MYSIGN#@$#$',
 resave: false,
 saveUninitialized: true
}));


var router = require('./router/main')(app, fs);