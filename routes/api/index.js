const router = require("express").Router();
const matchRoutes = require("./matches");
const transporterRoutes = require("./transporter")

router.use("/matches", matchRoutes);
router.use("/transporter", transporterRoutes);


module.exports = router;