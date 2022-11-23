const router = require("express").Router();
const inClassInstructorControllers = require("../controllers/inClassInstructor");

router.get("/getAll", inClassInstructorControllers.getAllEntries);
router.get("/getOne/:primary_key", inClassInstructorControllers.getOneEntry);
router.post("/add", inClassInstructorControllers.addEntry);
router.put("/edit", inClassInstructorControllers.editEntry);
router.delete("/delete/:primary_key", inClassInstructorControllers.deleteOneEntry);

module.exports = router;
