try {
    require('dotenv').config();
} catch (e) {
}

  module.exports = {
    auth: {
      USER: process.env.USER,
      PASS: process.env.PASS
    }
}


  