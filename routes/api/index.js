const router = require("express").Router();
const matchRoutes = require("./matches");

router.use("/matches", matchRoutes);


module.exports = router;