var nodemailer = require('nodemailer');
const router = require("express").Router();

var transport = {
  host: 'smtp.gmail.com',
  port: 465,
  auth: {
    type: 'OAuth2',
    user: "pupperconnectionapp@gmail.com",
    clientID: '349667216343-n2ht59rhf3ike9korso7qgmqv6acjeed.apps.googleusercontent.com',
    clientSecret: process.env.clientSecret,
    refreshToken: "1/KT4XnpJNF_Etg0-SKQM8ITWwD6bVPlURm1uP4ule6UY9tuJ_9LYiZWft2Sent0WN",
    accessToken: "ya29.GltiB1cqzkwb21W2kfiDkWtuix7K67m3DxNDwp7v-mgp8rmWRCvUum2WODonQLao1X-9GZjviG2g-BCcmAxG99mWXlgEPsMDgeUuhZqTdS-tUC0_WpEXqz8UQtX_"
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