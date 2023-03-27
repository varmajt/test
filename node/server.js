const http = require('http');
const path = require('path');
const cors = require('cors');
const fs = require('fs').promises;

const express = require('express');

const app = express(),bodyParser = require("body-parser"), port = 3000;

app.use(cors());
app.options('*', cors());

app.use(express.static(path.join(__dirname,'..','angular-getstarted/dist/')));

app.use(bodyParser.json());

app.get('/',(req, res) => {
  
  console.log(path.join(__dirname,'..','angular-getstarted/dist/index.html'));

  res.sendFile(path.join(__dirname,'..','angular-getstarted/dist/index.html'));
});

app.post('/users/authenticate', (req, res) => {
    res.send(JSON.stringify({username: "varma"}))
});

app.get('/date',(req, res) => {
  //console.log(new Date().toString());
  res.json(new Date().toString());
});

app.listen(port, () => {

  console.log(`Server listening on the port no.:${port}`);

});