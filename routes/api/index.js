const router = require("express").Router();
const answersRoutes = require("./answersRoutes")
const candidatesRoutes = require("./candidatesRoutes")
const candidateMatchesRoutes = require("./candidateMatchesRoutes")
const quizRoutes = require("./quizRoutes")

// candidates database routes. Matches /api/candidates
router.use('/candidates', candidatesRoutes);

// candidatesMatches database routes. Matches /api/answers
router.use('/candidatematches', candidateMatchesRoutes);

router.use('/quiz', quizRoutes);

//  Matches /api/candidates
router.use('/answers', answersRoutes)

module.exports = router;
