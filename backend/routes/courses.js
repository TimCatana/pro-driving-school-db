const router = require("express").Router();
const coursesControllers = require("../controllers/courses");

router.get("/add", coursesControllers.addEntry);
router.get("/edit", coursesControllers.editEntry);
router.get("/delete", coursesControllers.deleteEntry);

module.exports = router;
