const router = require("express").Router();
const inCarInstructorControllers = require("../controllers/inCarInstructor");


router.get("/getAll", inCarInstructorControllers.getAllEntries);
router.get("/getOne/:primary_key", inCarInstructorControllers.getOneEntry);
router.post("/add", inCarInstructorControllers.addEntry);
router.put("/edit/:primary_key", inCarInstructorControllers.editOneEntry);
router.delete("/delete/:primary_key", inCarInstructorControllers.deleteOneEntry);

module.exports = router;
