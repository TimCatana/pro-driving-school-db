const router = require("express").Router();
const coursesControllers = require("../controllers/course");

router.get("/getAll", coursesControllers.getAllEntries);
router.get("/getOne/:primary_key", coursesControllers.getOneEntry);
router.post("/add", coursesControllers.addEntry);
router.put("/edit/:primary_key", coursesControllers.editOneEntry);
router.delete("/delete/:primary_key", coursesControllers.deleteOneEntry);

module.exports = router;
