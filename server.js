const https = require('https');
const express = require('express');
const path = require('path');
var helmet = require('helmet');

const app = express();

app.use(express.json());
app.use(helmet());

app.use(express.static(path.join(__dirname, 'src')));
// default URL for website

app.use('/', function(req,res){
    res.sendFile(path.join(__dirname+'/index.html'));
    //__dirname : It will resolve to project folder.
  });

app.listen(process.env.PORT || 3000, function() {
    console.log("Server is running on port 3000.");
  });