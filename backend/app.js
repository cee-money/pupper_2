
  const express = require('express');
  const bodyParser = require('body-parser');
  const cors = require('cors');



// Config
const port = 3001;

const app = express(); // Define our app

app.use(cors())
;
// Configure app to use bodyParser()
// This will let us get data from a POST
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

const sign_s3 = require('./controllers/sign_s3');

app.use('/sign_s3', sign_s3.sign_s3);

app.listen(port);

console.log("Server Started make a request to localhost:" + port )
