var nodemailer = require('nodemailer');
var creds = require("./config")

var transport = {
  host: 'smtp.gmail.com',
//   port: 465,
  auth: {
    USER: creds.USER,
    PASS: creds.PASS
  }
}

var transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take messages');
  }
});