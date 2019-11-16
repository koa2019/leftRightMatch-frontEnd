const router = require("express").Router();
const quizResultsRoutes = require('./quizResultsRoutes')

// Book database routes. Matches /api/books
// router.use('/candidates', candidatesRoutes);

router.use('/results', quizResultsRoutes)

module.exports = router;
