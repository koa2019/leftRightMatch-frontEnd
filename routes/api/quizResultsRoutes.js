const router = require("express").Router();
const quizResultsController = require("../../controllers/quizResultsController");

// Matches with "/api/results/"
router.route("/")
  .get(quizResultsController.findAll)
  .post(quizResultsController.create);

// Matches with "/api/candidates/:id"
router
  .route("/:id")
  .get(quizResultsController.findById)
  .put(quizResultsController.update)
  .delete(quizResultsController.remove);

module.exports = router;
