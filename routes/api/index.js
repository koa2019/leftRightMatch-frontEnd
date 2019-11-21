const router = require("express").Router();
const answersRoutes = require("./answersRoutes")
const candidatesRoutes = require("./candidatesRoutes")
const candidateMatchesRoutes = require("./candidateMatchesRoutes")

// candidates database routes. Matches /api/candidates
router.use('/candidates', candidatesRoutes);

// candidatesMatches database routes. Matches /api/answers
router.use('/candidatematches', candidateMatchesRoutes);

//  Matches /api/candidates
router.use('/answers', answersRoutes)

module.exports = router;
