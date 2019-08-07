const express = require("express");
const cors = require('cors');
const routes = require("./routes");
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3001;
const sign_s3 = require('./controllers/sign_s3');
const mongoose = require("mongoose")

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);
app.use(cors())
app.use('/sign_s3', sign_s3.sign_s3);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/pupper");

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

// app.listen(config.port, () => {
//   console.log(`Application started at localhost:${config.port}`);
// });