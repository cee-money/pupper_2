const router = require("express").Router();
const pupperController = require("../../controllers/pupperController");

// matches with /api/matches/
router.route("/")
    .post(pupperController.create);
// matches with /api/matches/:email
router.route("/:email")
    .get(pupperController.findOne);
// matches with "/api/matches/:size/:energetic/:dominant"
router.route("/:size/:energetic/:dominant")
    .get(pupperController.findMatches)
    // matches with /api/matches/:id
router.route("/:id")
    .delete(pupperController.remove)
    .put(pupperController.update);

module.exports = router;