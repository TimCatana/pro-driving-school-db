const router = require("express").Router();
const inClassInstructorControllers = require("../controllers/in-class-instructors");

router.get("/getAll", inClassInstructorControllers.getAllEntries);
router.get("/getOne/:primary_key", inClassInstructorControllers.getOneEntry);
router.post("/add", inClassInstructorControllers.addOneEntry);
router.put("/edit/:primary_key", inClassInstructorControllers.editOneEntry);
router.delete("/delete/:primary_key", inClassInstructorControllers.deleteOneEntry);

module.exports = router;
