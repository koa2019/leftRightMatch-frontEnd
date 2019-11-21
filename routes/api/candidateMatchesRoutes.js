const router = require("express").Router();
const candidatesController = require("../../controllers/candidatesController");

// Matches with "/api/candidates/"
router.route("/")
  .get(candidatesController.findAll)

// Matches with "/api/answers/candidatematches/:id"
router.route("/:id")
  // .get(candidateMatchesController.findById)


// Matches with "/api/candidates/:id"
router
  .route("/:id")
  .get(candidatesController.findById)

module.exports = router;
