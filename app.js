var express = require('express');
var bodyParser = require('body-parser');
 
var app = express();
var port = process.env.PORT || 1337;
 
// body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
 
// test route
app.get('/', function (req, res) { 
  res.status(200).send('Hello world!'); 
});

app.get('/getClickByRef',function (req, res){
  var clickRefId = req.query.clickId;
  console.log(clickRefId);
  // Select query to iterate all the Portal and retrive the exist or not exist
  var resultId = "xxxx-"+clickRefId; 
 // res.status(200).send(resultId);
  var customResponse = { clickId : clickRefId , ClickReferenceId : resultId};

   res.status(200).send(resultId); 
})

 
app.listen(port, function () {
  console.log('Listening on port ' + port);
});

//Slack Bot Code

app.post('/hello', function (req, res, next) {
  var userName = req.body.user_name;
  var botPayload = {
    text : 'Hello ' + userName + ', welcome to Tracking Bot! Say My Name !!'
  };
  // Loop otherwise..
  if (userName !== 'slackbot') {
    return res.status(200).json(botPayload);
  } else {
    return res.status(200).end();
  }
});
