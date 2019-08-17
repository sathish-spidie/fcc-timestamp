// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

var isUnix =(date)=>{
  var dateObj = new Date(date)
    var unix = dateObj.getTime()
    var utc = dateObj.toUTCString()
    return {"unix":unix,"utc":utc}
}

var isString =(date)=>{
  var dateObj = new Date(date).toUTCString()
  var unix = new Date(date).getTime()
  var utc = dateObj
return {"unix":unix,"utc":utc}
}

// isString()
// isUnix()


app.get('/api/:date_string',(req,res)=>{
  var result;
  
  var date = parseInt(req.params.date_string)
  
  if(date > 30000){
    result = isUnix(date)
  }else{
   result = isString(req.params.date_string)
  }
  res.json(result)
})

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});