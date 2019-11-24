const router = require("express").Router();
const quizController = require("../../controllers/quizController");

router.route("/")
.get(quizController.findAll);

// Matches with "/api/answers/"
router.route("/")
  .post(answersController.create);

module.exports = router;
