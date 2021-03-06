const router = require("express").Router();
const pupperController = require("../../controllers/pupperController");

// matches with /api/matches/
router.route("/")
    .get(pupperController.findMatches)
    .post(pupperController.create);
// matches with /api/matches/:email
router.route("/:email")
    .get(pupperController.find);
router.route("/:id")
    .delete(pupperController.remove)
    .put(pupperController.update);

module.exports = router;