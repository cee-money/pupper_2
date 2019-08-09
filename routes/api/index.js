const router = require("express").Router();
const matchRoutes = require("./matches");
const transporter = require("../../controllers/transporter")

router.use("/matches", matchRoutes);

router.post('/send', (req, res, next) => {
    var name = req.body.name
    var email = req.body.email
    var message = req.body.message
    var content = `name: ${name} \n email: ${email} \n message: ${message} `
  
    var mail = {
      from: name,
      to: req.body.email,  //Change to email address that you want to receive messages on
      subject: 'Pupper Contact Request',
      text: content
    }
  
    transporter.sendMail(mail, (err, data) => {
      if (err) {
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