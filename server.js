const routes = require("./routes");
const express = require("express");
const mongoose = require("mongoose");
const twilio = require('twilio');
const config = require('./controllers/config');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const AccessToken = twilio.jwt.AccessToken;
const ChatGrant = AccessToken.ChatGrant;
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// TWILIO ============================================

// app.get('/token/:identity', (request, response) => {
app.get('/token', (request, response) => {
  const identity = Math.floor(Math.random() * (100 - 1)) + 1;
  const accessToken = new AccessToken(config.twilio.accountSid, config.twilio.apiKey, config.twilio.apiSecret);

  accessToken.identity = identity;
  accessToken.addGrant(new ChatGrant({serviceSid: config.twilio.chatServiceSid}));

  console.log(accessToken);

  response.send({
    identity: accessToken.identity,
    jwt: accessToken.toJwt()
  });
});

// ===================================================
// Add routes, both API and view
app.use(routes);


// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/pupper", { useNewUrlParser: true });

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

// app.listen(config.port, () => {
//   console.log(`Application started at localhost:${config.port}`);
// });