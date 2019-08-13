
var nodemailer = require('nodemailer');
const router = require("express").Router();
require("dotenv").config();

var transport = {
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    type: 'OAuth2',
    user: "pupperconnectionapp@gmail.com",
    clientId: '393606901902-gsdk2g3nkdpgkqtei7eemrjf7gn972ok.apps.googleusercontent.com',
    clientSecret: process.env.CLIENT_SECRET,
    refreshToken: "1/ETcuCUeUhdw4pJ57bZnCycrJnACvxGEmv1DIKClh_Cg",
    accessToken: "ya29.GltjByi6QKAYp8xVQy-fqwSdBEtl5HEZxOT7uq1EIwwTmTI0ijyna8SQ4W5SR4sb8qrEOOWha9vbHy6sQsIpeeHyWWg5krA0MrB8xTzG_T_zjGu72TtzczNVYDds",
    expires: 3600
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

router.post('/send', (req, res, next) => {
  var name = req.body.name
  var email = req.body.email
  var message = req.body.message
  var recipient = req.body.recipient
  var content = `name: ${name} \n email: ${email} \n message: ${message} `

  var mail = {
    from: "pupperconnectionapp@gmail.com",
    to: recipient,  //Change to email address that you want to receive messages on
    subject: 'Pupper Contact Request',
    text: content
  }

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      console.log("err" , err)
      res.json({
        msg: 'fail'
      })
    } else {
      res.json({
        msg: 'success'
      })
    }
  })
})

module.exports = router;