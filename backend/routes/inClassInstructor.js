const router = require("express").Router();
const inClassInstructorControllers = require("../controllers/inClassInstructor");

router.get("/getAll", inClassInstructorControllers.getAllEntries);
router.get("/getOne/:primary_key", inClassInstructorControllers.getOneEntry);
router.post("/add", inClassInstructorControllers.addEntry);
router.put("/edit/:primary_key", inClassInstructorControllers.editOneEntry);
router.delete("/delete/:primary_key", inClassInstructorControllers.deleteOneEntry);

module.exports = router;
