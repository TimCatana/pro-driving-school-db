const router = require("express").Router();
const coursesControllers = require("../controllers/courses");

router.get("/getAll", coursesControllers.getAllEntries);
router.get("/getOne/:primary_key", coursesControllers.getOneEntry);
router.get("/getFilledPdf/:primary_key", coursesControllers.getFilledPdf);
router.post("/add", coursesControllers.addOneEntry);
router.put("/edit/:primary_key", coursesControllers.editOneEntry);
router.delete("/delete/:primary_key", coursesControllers.deleteOneEntry);

module.exports = router;
