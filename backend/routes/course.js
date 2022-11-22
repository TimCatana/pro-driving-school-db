const router = require("express").Router();
const coursesControllers = require("../controllers/course");

// router.get("/get", coursesControllers.addEntry);
router.post("/add", coursesControllers.addEntry);
router.put("/edit", coursesControllers.editEntry);
router.delete("/delete", coursesControllers.deleteEntry);

module.exports = router;
