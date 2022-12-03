const router = require("express").Router();
const studentControllers = require("../controllers/students");

router.get("/getAll", studentControllers.getAllEntries);
router.get("/getOne/:primary_key", studentControllers.getOneEntry);
router.get("/getFilledPdf/:primary_key", studentControllers.getFilledPdf);
router.post("/add", studentControllers.addOneEntry);
router.put("/edit/:primary_key", studentControllers.editOneEntry);
router.delete("/delete/:primary_key", studentControllers.deleteOneEntry);

module.exports = router;
