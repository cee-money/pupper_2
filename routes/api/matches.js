const router = require("express").Router();
const pupperController = require("../../controllers/pupperController");

router.route("/")
    .get(pupperController.findAll)
    .post(pupperController.create);

router.route("/:id")
    .delete(pupperController.remove)
    .put(pupperController.update);