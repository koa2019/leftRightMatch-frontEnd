const router = require("express").Router();
const answersRoutes = require("./answersRoutes")
const candidatesRoutes = require("./candidatesRoutes")

// candidates database routes. Matches /api/candidates
router.use('/candidates', candidatesRoutes);

//  Matches /api/candidates
router.use('/answers', answersRoutes)

module.exports = router;
