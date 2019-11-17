const router = require("express").Router();
const answersController = require("../../controllers/answersController");

// Matches with "/api/answers/"
router.route("/")
  .post(answersController.create);

module.exports = router;
