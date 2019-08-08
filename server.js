const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
const sign_s3 = require('./controllers/sign_s3');
const mongoose = require("mongoose");
const twilio = require('twilio');
const config = require('./controllers/config');

const AccessToken = twilio.jwt.AccessToken;
const ChatGrant = AccessToken.IpMessagingGrant;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// TWILIO ============================================

app.post('/token/:identity', (request, response) => {
  const identity = request.params.identity;
  const accessToken = new AccessToken(config.twilio.accountSid, config.twilio.apiKey, config.twilio.apiSecret);
  const chatGrant = new ChatGrant({
    serviceSid: config.twilio.chatServiceSid,
    endpointId: `${identity}:browser`
  });
  accessToken.addGrant(chatGrant);
  accessToken.identity = identity;
  response.set('Content-Type', 'application/json');
  response.send(JSON.stringify({
    token: accessToken.toJwt(),
    identity: identity
  }));
})

// ===================================================
// Add routes, both API and view
app.use(routes);


// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/pupper");

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

// app.listen(config.port, () => {
//   console.log(`Application started at localhost:${config.port}`);
// });