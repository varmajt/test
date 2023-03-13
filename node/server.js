const http = require('http');
const path = require('path');
const fs = require('fs').promises;

const express = require('express');

const app = express(),bodyParser = require("body-parser"), port = 3000;

app.use(express.static(path.join(__dirname,'..','angular-getstarted/dist/')));

app.use(bodyParser.json());

app.get('/',(req, res) => {
  
  console.log(path.join(__dirname,'..','angular-getstarted/dist/index.html'));

  res.sendFile(path.join(__dirname,'..','angular-getstarted/dist/index.html'));
});

app.listen(port, () => {

  console.log(`Server listening on the port no.:${port}`);

});