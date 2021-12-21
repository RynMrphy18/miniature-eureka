const router = require("express").Router();
const noteRoutes = require("./noteRoutes");

// uses routes made in routes/apiroutes/noteroutes

router.use(noteRoutes);

module.exports = router;