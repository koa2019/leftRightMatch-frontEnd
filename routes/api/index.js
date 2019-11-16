const router = require("express").Router();
const bookRoutes = require('./bookRoutes');
const googleRoutes = require('./googleRoutes');

// Book database routes. Matches /api/books
router.use('/books', candidatesRoutes);

module.exports = router;
