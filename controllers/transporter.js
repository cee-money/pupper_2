var nodemailer = require('nodemailer');

var transport = {
  host: 'smtp.gmail.com',
//   port: 465,
  auth: {
    user: USER,
    pass: PASS
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